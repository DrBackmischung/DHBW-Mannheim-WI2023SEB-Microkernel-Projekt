import React from "react";

const sprueche = [
  "Wer nichts weiß, muss alles glauben. – Marie von Ebner-Eschenbach",
  "Der Weg ist das Ziel. – Konfuzius",
  "Cogito, ergo sum. – René Descartes",
  "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt. – Ludwig Wittgenstein",
  "Nur wer sich ändert, bleibt sich treu. – Wolf Biermann",
  "Auch der weiteste Weg beginnt mit einem ersten Schritt. – Laotse",
  "Wenn du es eilig hast, geh langsam. – Japanisches Sprichwort",
  "Man kann nicht zweimal in denselben Fluss steigen. – Heraklit"
];

function zufallsSpruch(): string {
  const index = Math.floor(Math.random() * sprueche.length);
  return sprueche[index];
}

export const WisdomPluginPage: React.FC = () => {
  const spruch = zufallsSpruch();

  return (
    <div style={{ padding: "2em", fontStyle: "italic", fontSize: "1.2em" }}>
      🧘‍♂️ <p>{spruch}</p>
    </div>
  );
};
