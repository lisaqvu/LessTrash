import React from 'react';

const GameOver = ({ restartGame }) => (
  <div className="justify-center">
    <h1>Game Over!</h1>
    <button className="restart-button" onClick={restartGame}>
      Play again
    </button>
  </div>
);

export default GameOver;