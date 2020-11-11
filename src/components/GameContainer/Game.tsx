import React from 'react';
import Header from './Header';
import Cards from './Cards';
import './Game.css';
import { connect } from 'react-redux';
import { setInitialCardsOrder, startGame, setScoreAction, restartGameAction } from '../../store/actions';
import { GameStatus, GameAreas, PickupCards } from '../../store/types';

type GameProps = {
  setInitialCardsOrder: Function,
  startGame: Function,
  setScore: Function,
  restartGame: Function,
  gameStatus: GameStatus,
  pickupCards: PickupCards[],
  dropCards: PickupCards[],
  score: number
}

class Game extends React.Component<GameProps, {}> {

  private timer: NodeJS.Timeout | undefined;

  initTimer() {
    this.timer = setInterval(() => {
      this.props.setScore();
    }, 1000);
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  componentDidMount() {
    this.props.setInitialCardsOrder();
  }

  componentDidUpdate() {
    const { gameStatus } = this.props;
    if (gameStatus === GameStatus.WINNER) {
      this.stopTimer();
      setTimeout(() => {
        this.props.restartGame();
        this.props.setInitialCardsOrder();
      }, 10000);
    }
    if (gameStatus === GameStatus.STARTED && !this.timer) {
      this.initTimer();
    }
  }

  render() {
    const { gameStatus, pickupCards, dropCards, score } = this.props;
    return (
      <div className="game">
        <div>{gameStatus}</div>
        <Header score={score} />
        <Cards cards={pickupCards} area={GameAreas.PICK} />
        <Cards cards={dropCards} area={GameAreas.DROP} />
      </div>
    )
  }
}

const mapState = ({game}: any) => ({
  pickupCards: game.pickupCards,
  dropCards: game.dropCards,
  score: game.score,
  gameStatus: game.status
})

const mapProps = (dispatch: any) => ({
  setInitialCardsOrder: () => dispatch(setInitialCardsOrder()),
  startGame: () => dispatch(startGame()),
  setScore: () => dispatch(setScoreAction()),
  restartGame: () => dispatch(restartGameAction()),
})

export default connect(mapState, mapProps)(Game);
