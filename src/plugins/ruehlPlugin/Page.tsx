import React from 'react';

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center' as const,
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
  },
  header: {
    fontSize: '2.5em',
    color: '#ff0000',
    textTransform: 'uppercase' as const,
    marginBottom: '20px',
    textShadow: '2px 2px 4px #000000',
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    border: '3px solid #ff0000',
    borderRadius: '10px',
  },
  quote: {
    fontSize: '1.2em',
    fontStyle: 'italic',
    margin: '20px 0',
    padding: '10px',
    backgroundColor: '#ff000022',
    borderRadius: '5px',
  }
};

export const RuehlPluginPage: React.FC = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Markus "Godzilla" Rühl</h1>
    
    <div style={styles.quote}>
      "Das is' kein Hustensaft hier - Das ist Hardcore!"
    </div>
    
    <div style={styles.imageGrid}>
      <img 
        style={styles.image}
        src="https://www.evolution-of-bodybuilding.net/wp-content/uploads/2016/05/Markus-Ruhl-27.jpg"
        alt="Markus Rühl Posing"
      />
      <img 
        style={styles.image}
        src="https://fitnessvolt.com/wp-content/uploads/2021/01/markus-ruhl-most-muscular.jpg"
        alt="Markus Rühl Most Muscular"
      />
      <img 
        style={styles.image}
        src="https://www.muscleandfitness.com/wp-content/uploads/2018/07/Markus-Ruhl-Shoulder-Exercise-Gulf-Coast-Finals-NPC-72.jpg"
        alt="Markus Rühl Training"
      />
    </div>

    <div style={styles.quote}>
      "Wer nicht wagt, der nicht gewinnt!"
    </div>
    
    <div style={styles.imageGrid}>
      <img 
        style={styles.image}
        src="https://www.greatestphysiques.com/wp-content/uploads/2016/08/markus-ruhl-biceps.jpg"
        alt="Markus Rühl Biceps"
      />
      <img 
        style={styles.image}
        src="https://fitnessvolt.com/wp-content/uploads/2016/12/markus-ruhl-13-750x422.jpg"
        alt="Markus Rühl Classic"
      />
    </div>

    <div style={styles.quote}>
      "Richtig Hardcore, richtig Masse!"
    </div>
  </div>
);
