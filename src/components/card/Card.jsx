import React from 'react';
import ReactCardFlip from "react-card-flip";
const image = {
  0:'https://i.imgur.com/FICzBxL.png',
  1:'https://i.imgur.com/uSIGkPS.png',
  2:'https://i.imgur.com/vV8QQdl.png',
  3:'https://i.imgur.com/Ub9Mkwd.png',
  4:'https://i.imgur.com/dwVAUjx.png',
  5:'https://i.imgur.com/xWA3Gpc.png',
  6:'https://i.imgur.com/FWZCuGj.png',
  7:'https://i.imgur.com/iPVO7VH.png',
  8:'https://i.imgur.com/CMKe2R2.png',
  9:'https://i.imgur.com/aBMB2Lz.png',
  10:'https://i.imgur.com/AoOVg7W.png',
  11:'https://i.imgur.com/7cGtez9.png',
  12:'https://i.imgur.com/Pzw54pZ.png',
  13:'https://i.imgur.com/jXKhu9Y.png',
  14:'https://i.imgur.com/PaRii40.png',
  15:'https://i.imgur.com/uiikZ1P.png'
  
}
  
// const divStyle = (cardNumber)=> {
//   backgroundImage: 'url(' + image[cardNumber] + ')'
// }

const Card = ({ id, isFlipped, handleClick, cardNumber }) => (
  <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
    <button id={id} className={`card card-front ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="front">
    </button>

    <button id={id} className={`card card-back ${cardNumber !== -1 ? "" : "hide-card"}`} style={{backgroundImage: 'url(' + image[cardNumber] + ')'}} onClick={handleClick} key="back">
    </button>
  </ReactCardFlip>
);

export default Card;