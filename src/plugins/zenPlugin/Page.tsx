import React from "react";

const zenQuotes = [
  "Sitze still, tu nichts – der Frühling kommt und das Gras wächst von selbst.",
  "Lass los oder du wirst gezogen.",
  "Ein Teich spiegelt, was ist – nicht was sein soll.",
  "Das Ziel ist nicht das Ziel, sondern der Weg.",
  "Weniger ist oft mehr."
];

export const ZenPluginPage: React.FC = () => {
  const randomQuote = zenQuotes[Math.floor(Math.random() * zenQuotes.length)];

  return (
    <div style={{
      background: 'linear-gradient(to right, #a8edea, #fed6e3)',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: 'serif'
    }}>
      <h1 style={{
        color: '#333',
        fontSize: '2rem',
        marginBottom: '20px'
      }}>
        🧘 Zen des Tages
      </h1>
      <p style={{
        fontStyle: 'italic',
        fontSize: '1.5rem',
        color: '#555',
        maxWidth: '80%',
        textAlign: 'center'
      }}>
        "{randomQuote}"
      </p>
    </div>
  );
};
