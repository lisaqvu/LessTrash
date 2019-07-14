import React from 'react';
import Counter from './Counter';
const Header = ({ restartGame,score }) => (
  <div className="grid-header-container">
<<<<<<< HEAD
=======
    <div className="justify-left timer">
      <label>Time left: </label>
    </div>
>>>>>>> origin/master
    <div className="justify-center game-status-text">
    <label><Counter score={score}/></label>
    </div>
    <div className="justify-end">
      <button onClick={restartGame} className="restart-button">
        <img className="img_restart" src="https://i.imgur.com/WEY203H.png" alt=""/>
      </button>
    </div>
  </div>
);

export default Header;