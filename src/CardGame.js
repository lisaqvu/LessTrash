import React, { PureComponent } from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';
import GameOver from './components/card/GameOver';

import './styles/main.css';

class CardGame extends PureComponent {

  state = { 
    isFlipped: Array(16).fill(false),
    shuffledCard: CardGame.duplicateCard().sort(() => Math.random() - 0.5),
    clickCount: 1,
    prevSelectedCard: -1,
    prevCardId: -1,
    score: 0 
  };
  

  static duplicateCard = () => {
    
    // return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].reduce((preValue, current) => {
    //   return preValue.concat([preValue, current])
    // },[]);
    var N = 16; 
    return Array.apply(null, {length: N}).map(Number.call, Number);
  };

  handleClick = event => {
    console.log(this.state.isFlipped);
    event.preventDefault();
    const cardId = event.target.id;
    const newFlipps = this.state.isFlipped.slice();
    this.setState({
        prevSelectedCard: this.state.shuffledCard[cardId],
        prevCardId: cardId
    });

    if (newFlipps[cardId] === false) {
      newFlipps[cardId] = !newFlipps[cardId];
      this.setState({ 
        isFlipped: newFlipps,
        clickCount: this.state.clickCount + 1
      });

      if (this.state.clickCount === 2) {
        this.setState({ clickCount: 1 });
        const prevCardId = this.state.prevCardId;
        const newCard = this.state.shuffledCard[cardId];
        const previousCard = this.state.prevSelectedCard;

        this.isCardMatch(previousCard, newCard, prevCardId, cardId);
      }
    }
  };

  isCardMatch = (card1, card2, card1Id, card2Id) => {
    if (card1 === card2% 8 || card1%8 === card2) {
      const hideCard = this.state.shuffledCard.slice();
      hideCard[card1Id] = -1;
      hideCard[card2Id] = -1;
      setTimeout(() => {
        this.setState({
          shuffledCard: hideCard,
          // add score
          score: this.state.score+=1
        })
      }, 1000);
      // increase score
      console.log(this.state.score)
        
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout(() => {
        this.setState( { isFlipped: flipBack });
      }, 1000);
    }
  };

  restartGame = () => {
    this.setState({
      isFlipped: Array(16).fill(false),
      shuffledCard: CardGame.duplicateCard().sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      score:0,
      prevCardId: -1
    });
  };

  isGameOver = () => {
    return this.state.isFlipped.every((element) => element !== false);
  };

  render() {
    return (
     <div>
       <Header restartGame={this.restartGame} score={this.state.score}/>
       { this.isGameOver() ? <GameOver restartGame={this.restartGame} /> :
       <div className="grid-container">
          {
            this.state.shuffledCard.map((cardNumber, index) => 
              <div className="single_card">
              <Card
                key={index} 
                id={index} 
                cardNumber={cardNumber} 
                isFlipped={this.state.isFlipped[index]} 
                handleClick={this.handleClick}  
              />
              </div>
            )
          }
        </div>
       }
     </div>
    );
  }
}

export default CardGame;