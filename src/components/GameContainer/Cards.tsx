import React from 'react';
import Card from './Card';
import './Cards.css';
import { PickupCards, GameAreas } from '../../store/types';

const Cards = (props: any) => {
  const cards: PickupCards[] = props.cards;
  const area: GameAreas = props.area;
  return (
    <div className="pickup-cards">
      {cards.map((cardName: string, index: number) => <Card area={area} key={index} index={index} cardName={cardName} />)}
    </div>
  )
}

export default Cards;