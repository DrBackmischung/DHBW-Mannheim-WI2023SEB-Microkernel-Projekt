'use client';
import React, { useRef, useState, useEffect } from 'react';

export const WheelOfNamesPluginPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [names, setNames] = useState<string[]>([]);
  const [nameInput, setNameInput] = useState('');
  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selectedName, setSelectedName] = useState('');

  const colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6'];

  const drawWheel = (currentAngle: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const radius = canvas.width / 2;
    const numSegments = names.length;
    const anglePerSegment = 2 * Math.PI / numSegments;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    names.forEach((name, i) => {
      const startAngle = currentAngle + i * anglePerSegment;
      const endAngle = startAngle + anglePerSegment;

      ctx.beginPath();
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius, startAngle, endAngle);
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.stroke();

      ctx.save();
      ctx.translate(radius, radius);
      ctx.rotate(startAngle + anglePerSegment / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#000';
      ctx.font = '16px Arial';
      ctx.fillText(name, radius - 10, 5);
      ctx.restore();
    });

    // Draw pointer
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(radius - 10, 20);
    ctx.lineTo(radius + 10, 20);
    ctx.closePath();
    ctx.fill();
  };

  useEffect(() => {
    drawWheel(angle);
  }, [names, angle]);

  const addName = () => {
    if (nameInput.trim()) {
      setNames(prev => [...prev, nameInput.trim()]);
      setNameInput('');
      setSelectedName('');
    }
  };

  const clearNames = () => {
    setNames([]);
    setSelectedName('');
    setAngle(0);
  };

  const spinWheel = () => {
    if (spinning || names.length === 0) return;
    setSpinning(true);
    const spinSpeed = Math.random() * 0.3 + 0.3;
    const startAngle = angle;
    const spinDuration = 4000;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const newAngle = startAngle + eased * (Math.PI * 8 * spinSpeed);
      setAngle(newAngle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        const index = names.length - Math.floor((newAngle % (2 * Math.PI)) / (2 * Math.PI) * names.length) - 1;
        const selected = names[(index + names.length) % names.length];
        setSelectedName(selected);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Wheel of Names</h2>
      <input
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
        placeholder="Enter name"
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button onClick={addName} style={{ marginLeft: '10px' }}>Add</button>
      <button onClick={clearNames} style={{ marginLeft: '10px' }}>Clear</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {names.map((name, i) => <li key={i}>{name}</li>)}
      </ul>

      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: '4px solid #444', marginTop: '20px', background: '#fff', cursor: 'pointer' }}
        onClick={spinWheel}
      />
      <h3>{selectedName && `Selected: ${selectedName}`}</h3>
    </div>
  );
};