import React from 'react';
import { cardType } from '../../js/store/reducer';
import { CardPerson } from './CardPerson';
import { CardStarship } from './CardStarship';

interface CardComponentType {
  cardType: cardType;
  cardData: any;
}

export const Card = ({ cardType, cardData }: CardComponentType) => {
  return (
    <div className='card'>
      {cardData ? cardType === 'people' ? <CardPerson cardData={cardData} /> : <CardStarship cardData={cardData} /> : '...'}
    </div>
  );
};
