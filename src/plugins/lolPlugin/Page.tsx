import React from "react";

export const LolPluginPage: React.FC = () => {
    const handleClick = () => {
        const messages = [
            "🎉 Überraschung!",
            "😄 Lächeln nicht vergessen!",
            "🚀 Ab geht die Post!",
            "🦄 Du bist einzigartig!",
        ];
        const random = messages[Math.floor(Math.random() * messages.length)];
        alert(random);
    };

    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={handleClick}>
                🎁 Klick mich!
            </button>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fefefe",
    },
    button: {
        padding: "1rem 2rem",
        fontSize: "1.2rem",
        backgroundColor: "#ff69b4",
        color: "white",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
};
