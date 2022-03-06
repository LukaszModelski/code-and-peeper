import React from 'react';
import { cardType } from '../../js/store/reducer';
import { CardPerson } from './CardPerson';
import { CardStarship } from './CardStarship';

interface CardComponentType {
  cardType: cardType;
  cardData: any;
  winner: boolean;
}

export const Card = ({ cardType, cardData, winner }: CardComponentType) => {
  return (
    <div className={`card${winner ? ' card--winner' : ''}`}>
      {cardData ? cardType === 'people' ? <CardPerson cardData={cardData} /> : <CardStarship cardData={cardData} /> : '...'}
    </div>
  );
};
