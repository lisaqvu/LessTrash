import React from 'react';
import Counter from './Counter';
const Header = ({ restartGame,score }) => (
  <div className="grid-header-container">
    <div className="justify-center game-status-text"></div>
    <div className="justify-center game-status-text">
    <label><Counter score={score}/></label>
    </div>
    <div className="justify-center margin-bottom-zero">
        <p>Turn over any two cards. If the image in one card is the alternative of the other </p>
        <p>
          <i>(like plastic bottle - paper bottle, wood slipper - plastic slipper)</i>, you get one point</p>
        <p>Or else, it will get turned down again. The game ends when you can make all cards disappear</p>
    </div>
    <div className="justify-start">
      <button onClick={restartGame} className="restart-button">
        <img className="img_restart" src="https://i.imgur.com/WEY203H.png" alt=""/>
      </button>
    </div>
    <div className="justify-center game-status-text"></div>
  </div>
);

export default Header;