import React from 'react';
import { Player } from '../components/Player/Player';

export const App = () => {
  return (
    <main className='container'>
      <Player nr={1} />
      <Player nr={2} />
    </main>
  );
};
