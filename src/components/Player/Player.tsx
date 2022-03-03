import React from 'react';
import { useSelector } from 'react-redux';
import { stateType } from '../../js/store/reducer';

interface PlayerType {
  nr: 1 | 2;
}

export const Player = ({ nr }: PlayerType) => {
  const score: number = useSelector((state: stateType) => state.score[`player${nr}`]);

  return (
    <div className='player'>
      <h2 className='player__name'>Player {nr}</h2>
      <div className='player__score'>{score}</div>
    </div>
  );
};