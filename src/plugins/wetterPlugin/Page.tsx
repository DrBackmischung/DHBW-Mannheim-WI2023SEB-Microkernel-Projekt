import React from "react";

export const WetterPluginPage: React.FC = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Beispieldaten für eine einfache Wettervorhersage
  const forecast = [
    { day: "Heute", temp: "24°C", condition: "Sonnig ☀️" },
    { day: "Morgen", temp: "22°C", condition: "Leicht bewölkt ⛅" },
    { day: "Übermorgen", temp: "20°C", condition: "Regnerisch 🌧️" },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Wetter Vorhersage</h1>
      <p>Datum: {formattedDate}</p>
      
      <div style={{ marginTop: "20px" }}>
        {forecast.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              padding: "15px", 
              marginBottom: "10px", 
              borderRadius: "8px",
              backgroundColor: index === 0 ? "#e3f2fd" : "#f5f5f5",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>{item.day}</h3>
            <p style={{ margin: "0" }}><strong>Temperatur:</strong> {item.temp}</p>
            <p style={{ margin: "5px 0 0 0" }}><strong>Wetterlage:</strong> {item.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
