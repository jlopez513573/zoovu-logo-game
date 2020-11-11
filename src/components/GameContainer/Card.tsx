import React from 'react';
import { useDispatch } from 'react-redux';
import { moveCard, checkGame, startGame } from '../../store/actions';
import './Card.css';
import { useSelector } from 'react-redux';
import { GameStatus, PickupCards } from '../../store/types';
import Z from '../../assets/zoovu-z.svg';
import O from '../../assets/zoovu-o.svg';
import V from '../../assets/zoovu-v.svg';
import U from '../../assets/zoovu-u.svg';
import { gameStatusSelector } from '../../store/selectors';

const PICKUP_CARDS: any = {Z, O, V, U, EMPTY: PickupCards.EMPTY}

const Card = (props: any) => {
  const { index, cardName, area } = props;
  const dispatch = useDispatch();
  const gameStatus = useSelector(gameStatusSelector);

  const onDragStartHandler = (event: any) => {
    event.dataTransfer.setData("sourceCardInfo", JSON.stringify({index, cardName, area}));
  }

  const onDragOverHandler = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
  }

  const onDropHandler = (event: any) => {
    event.preventDefault();
    const source = JSON.parse(event.dataTransfer.getData("sourceCardInfo"));
    if (gameStatus === GameStatus.PAUSED) {
      dispatch(startGame());
    }
    dispatch(moveCard({source, target: {index, area}}));
    dispatch(checkGame());
  }

  return (
    <div
      className={cardName === PickupCards.EMPTY ? 'empty-card' : 'card'}
      draggable="true"
      onDragStart={onDragStartHandler}
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}
    >
      {cardName !== PickupCards.EMPTY && (
        <img
          className="card-image"
          src={PICKUP_CARDS[cardName]}
          alt={cardName} />
      )}
    </div>
  )
}

export default Card;