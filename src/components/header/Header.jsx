import React from 'react';
import Counter from './Counter';
const Header = ({ restartGame,score }) => (
  <div className="grid-header-container">
    <div className="justify-left timer">
      <label>Time left: </label>
    </div>
    <div className="justify-center game-status-text">
    <label><Counter score={score}/></label>
    </div>
    <div className="justify-end">
      <button onClick={restartGame} className="restart-button">Restart Game</button>
    </div>
  </div>
);

export default Header;