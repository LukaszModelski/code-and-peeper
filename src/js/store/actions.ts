import { cardType, personAtrType, starshipAtrType, playerNrType, winnerType } from './reducer';

// actions types
export const INCREMENT_ROUND: string = 'INCREMENT_ROUND';
export const SET_CARD_TYPE: string = 'SET_CARD_TYPE';
export const SET_ATTRIBUTE: string = 'SET_ATTRIBUTE';
export const SET_PLAYER_CARD_ID: string = 'SET_PLAYER_CARD_ID';
export const CLEAR_PLAYERS_CARD_ID: string = 'CLEAR_PLAYERS_CARD_ID';
export const SET_CARD: string = 'SET_CARD';
export const INCREASE_PLAYER_SCORE: string = 'INCREASE_PLAYER_SCORE';
export const SET_WINNER: string = 'SET_WINNER';
export const CLEAR_WINNER: string = 'CLEAR_WINNER';

// actions creators
export type actionType = {
  type: string;
  value?: any;
}

export const incrementRound = (): actionType => ({
  type: INCREMENT_ROUND,
});

export const setCardType = (value: cardType): actionType => ({
  type: SET_CARD_TYPE,
  value: value
});

export const setAttribute = (attribute: personAtrType & starshipAtrType, cardType: cardType): actionType => ({
  type: SET_ATTRIBUTE,
  value: {
    attribute,
    cardType
  }
});

export const setPlayerCardId = (player: any, cardId: number): actionType => ({
  type: SET_PLAYER_CARD_ID,
  value: {
    player: `player${player}`,
    cardId
  }
});

export const clearPlayersCardId = (): actionType => ({
  type: CLEAR_PLAYERS_CARD_ID,
});

export const setCard = (card: object, cardId: number, cardType: cardType): actionType => ({
  type: SET_CARD,
  value: {
    card,
    cardId,
    cardType
  }
});

export const increasePlayerScore = (player: playerNrType): actionType => ({
  type: INCREASE_PLAYER_SCORE,
  value: {
    player,
  }
});

export const setWinner = (winner: winnerType): actionType => ({
  type: SET_WINNER,
  value: {
    winner,
  }
});

export const clearWinner = (): actionType => ({
  type: CLEAR_WINNER,
});
