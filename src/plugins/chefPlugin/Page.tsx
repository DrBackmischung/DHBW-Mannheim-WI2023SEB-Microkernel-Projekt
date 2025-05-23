import { useState } from "react";

export const ChefPluginPage: React.FC = () => {
  const witze = [
    "Warum ist die Tomate rot geworden? Weil sie das Dressing gesehen hat! 🥗",
    "Ich mache eine Meeresfrüchte-Diät: Ich sehe Essen und esse es! 🍤",
    "Wie nennt man Käse, der nicht dir gehört? Nacho-Käse! 🧀",
    "Hast du vom italienischen Koch gehört, der gestorben ist? Er ist einfach \"Pasta way\" gegangen. 🍝",
    "In Bielefeld gibt's keine Gespenster – weil jeder glaubt, Bielefeld existiert sowieso nicht! 👻",
    "Warum hat der Oldenburger sein Fahrrad verkauft? Weil es eine Kuh war – und Kühe haben schließlich Hörner! 🚲🐄",
    "Wie nennt man Microservices ohne Dokumentation? Den Wilden Westen der Softwarearchitektur! 🤠",
    "In monolithischen Architekturen krempeln Entwickler die Ärmel hoch – in Microservices krempeln sie das Ticket hoch! 🎟️",
    "Warum bestellt der Softwarearchitekt im Restaurant immer nur eine Suppe? Weil er nicht alle Microservices auf einmal essen kann! 🍲",
    "Was sagt ein Container zu seinem Orchestrator? 'Du bringst echt Ordnung ins Chaos!' 🚢🤖",
    "Warum war der Koch schlecht im Debuggen? Weil er ständig seine Zutaten déclarieren, aber nie importieren konnte! 🍳💻",
    "Warum lieben Entwickler Currywurst? Weil sie's gern scharf mögen – genauso wie ihre Git-Branches! 🌭🔥",
  
  ];

  const [index, setIndex] = useState<number>(0);

  const naechsterWitz = () => {
    setIndex((prev) => (prev + 1) % witze.length);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #FFEFBA 0%, #FFFFFF 100%)',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      padding: '20px',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👨‍🍳 Willkommen bei Chef Witzen!</h2>
      <div style={{
        background: '#fff',
        border: '2px dashed #f4a261',
        borderRadius: '12px',
        padding: '20px',
        maxWidth: '400px',
      }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{witze[index]}</p>
        <button
          onClick={naechsterWitz}
          style={{
            background: '#2a9d8f',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Nächster Witz!
        </button>
      </div>
    </div>
  );
}
  