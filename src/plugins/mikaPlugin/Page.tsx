import React, { useState, useRef, useEffect } from "react";

export const MusicPluginPage: React.FC = () => {
  const [audioContext] = useState(() => new (window.AudioContext || (window as any).webkitAudioContext)());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fokussiert das div-Element automatisch, wenn die Komponente geladen wird
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const playNote = (frequency: number) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1);
    oscillator.stop(audioContext.currentTime + 1);
  };

  const notes = [
    { key: "C", frequency: 261.63, label: "C" },
    { key: "D", frequency: 293.66, label: "D" },
    { key: "E", frequency: 329.63, label: "E" },
    { key: "F", frequency: 349.23, label: "F" },
    { key: "G", frequency: 392.00, label: "G" },
    { key: "A", frequency: 440.00, label: "A" },
    { key: "H", frequency: 493.88, label: "B" },
    { key: "G", frequency: 523.25, label: "C (High)" },
  ];

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const note = notes.find((n) => n.key === event.key.toUpperCase());
    if (note) {
      playNote(note.frequency);
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{ outline: "none", textAlign: "center", padding: "20px" }}
    >
      <h2>Music Plugin</h2>
      <p>Press the keys below to play notes:</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {notes.map((note) => (
          <div
            key={note.key}
            style={{
              width: "50px",
              height: "150px",
              backgroundColor: "#ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={() => playNote(note.frequency)}
          >
            {note.label}
          </div>
        ))}
      </div>
      <p>Keyboard Mapping: {notes.map((note) => `${note.key} (${note.label})`).join(", ")}</p>
    </div>
  );
};