import React from 'react';

interface CardPersonComponentType {
  cardData: any;
}

export const CardPerson = ({ cardData }: CardPersonComponentType) => {
  return (
    <>
      <p className='card__attribute'>Name: {cardData.name}</p>
      <p className='card__attribute'>Mass: {cardData.mass}</p>
      <p className='card__attribute'>Height: {cardData.height}</p>
    </>
  );
};
