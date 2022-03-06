import React from 'react';

interface CardStarshipComponentType {
  cardData: any;
}

export const CardStarship = ({ cardData }: CardStarshipComponentType) => {
  return (
    <>
      <p className='card__attribute'>Name: {cardData.name}</p>
      <p className='card__attribute'>Crew: {cardData.crew}</p>
      <p className='card__attribute'>Length: {cardData.length}</p>
      <p className='card__attribute'>Cost in credits: {cardData.cost_in_credits}</p>
    </>
  );
};
