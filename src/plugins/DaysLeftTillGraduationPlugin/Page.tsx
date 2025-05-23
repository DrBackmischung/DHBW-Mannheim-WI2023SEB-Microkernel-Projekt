import React from 'react';

export const HelloWorldPluginPage: React.FC = () => {
  const today = new Date();
  const targetDate = new Date('2026-09-30'); // Ziel-Datum

  const diffTimeMs = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTimeMs / (1000 * 60 * 60 * 24));
  const diffMinutes = Math.ceil(diffTimeMs / (1000 * 60));

  // Witzige Vergleiche
  const footballGames = Math.floor(diffMinutes / 90); // 90 Minuten pro Spiel
  const espressoShots = Math.floor(diffMinutes / 3); // 3 Minuten pro Espresso-Zubereitung

  return (
    <div>
      <h1>Nur noch {diffDays} Tage bis zum 30.09.2026 und der Erlösung!</h1>
      <p>Das sind etwa {diffMinutes.toLocaleString()} Minuten.</p>
      <p>Oder anders gesagt: {footballGames.toLocaleString()} komplette Fußballspiele!</p>
      <p>Oder: {espressoShots.toLocaleString()} Espressi – aber wer zählt schon mit?</p>
    </div>
  );
};
