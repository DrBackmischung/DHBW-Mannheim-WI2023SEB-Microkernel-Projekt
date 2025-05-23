import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './TicTacToe.css';

type SquareValue = 'X' | 'O' | null;

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isWinningSquare: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  return (
    <button 
      className={`square ${isWinningSquare ? 'winning' : ''} ${value ? `square-${value}` : ''}`} 
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export const TicTacToePluginPage: React.FC = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateWinner = (squares: SquareValue[]): { winner: SquareValue; line: number[] } | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    
    return null;
  };

  const handleClick = (i: number) => {
    const squaresCopy = [...squares];
    
    // Return if there's a winner or the square is already filled
    if (winningLine || squaresCopy[i]) {
      return;
    }
    
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    
    const result = calculateWinner(squaresCopy);
    if (result) {
      setWinningLine(result.line);
    }
    
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i: number) => {
    return (
      <Square 
        value={squares[i]} 
        onClick={() => handleClick(i)} 
        isWinningSquare={winningLine ? winningLine.includes(i) : false}
      />
    );
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinningLine(null);
  };

  const result = calculateWinner(squares);
  const winner = result?.winner || null;
  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (squares.every(square => square !== null)) {
    status = 'Game ended in a draw';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="tictactoe-container">
      {winner && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      
      <h1>Tic Tac Toe</h1>
      
      <div className="game-board">
        <div className="status">{status}</div>
        
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};