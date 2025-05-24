import React, { useEffect, useRef, useState } from 'react';
import styles from './ButtonPluginPage.module.css';

export const ButtonPluginPage: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || !buttonRef.current) return;

    const button = buttonRef.current;
    const step = 2;
    let x = 100;
    let y = 100;
    let dx = step;
    let dy = step;

    const move = () => {
      const { innerWidth, innerHeight } = window;
      const btnWidth = button.offsetWidth;
      const btnHeight = button.offsetHeight;

      x += dx;
      y += dy;

      if (x + btnWidth >= innerWidth || x <= 0) dx *= -1;
      if (y + btnHeight >= innerHeight || y <= 0) dy *= -1;

      button.style.left = `${x}px`;
      button.style.top = `${y}px`;

      requestAnimationFrame(move);
    };

    console.log('Animation started');
    requestAnimationFrame(move);
  }, [running]);

  const handleClick = () => {
    console.log('Button clicked');
    setRunning(true);
  };

  return (
    <div className={styles.container}>
      <button
        ref={buttonRef}
        className={styles.coolButton}
        onClick={handleClick}
      >
        Cool Button
      </button>
    </div>
  );
};
