import React from 'react';
import { useSelector } from 'react-redux';
import { stateType } from '../../js/store/reducer';
import { Card } from '../Card/Card';
import { playerNrType, cardType, winnerType } from '../../js/store/reducer';

interface PlayerComponentType {
  nr: 1 | 2;
}

export const Player = ({ nr }: PlayerComponentType) => {
  const player: playerNrType = `player${nr}`;
  const score: number = useSelector((state: stateType) => state[player].score);
  const cardId: number = useSelector((state: stateType) => state[player].cardId);
  const cardType: cardType = useSelector((state: stateType) => state.cardType);
  const playerCard: any = useSelector((state: stateType) => state.cards[cardType][cardId]);
  const winner: winnerType = useSelector((state: stateType) => state.winner);

  return (
    <div className='player'>
      <h2 className='player__name'>Player {nr}</h2>
      <Card cardType={cardType} cardData={playerCard} winner={winner === nr} />
      <div className='player__score'>Score: {score}</div>
    </div>
  );
};
