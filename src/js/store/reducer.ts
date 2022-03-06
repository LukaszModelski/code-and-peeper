import {
  INCREMENT_ROUND,
  SET_CARD_TYPE,
  SET_ATTRIBUTE,
  SET_PLAYER_CARD_ID,
  SET_CARD,
  CLEAR_PLAYERS_CARD_ID,
  INCREASE_PLAYER_SCORE,
  actionType,
  SET_WINNER,
  CLEAR_WINNER
} from './actions';
import { config } from '../config';

export type cardType = 'people' | 'starships';
export type playerNrType = 'player1' | 'player2';
export type personAtrType = 'mass' | 'height';
export type starshipAtrType = 'crew' | 'length' | 'cost_in_credits';
export type winnerType =  1 | 2 | undefined;

export type stateType = {
  player1: {
    score: number;
    cardId: number | undefined;
  };
  player2: {
    score: number;
    cardId: number;
  };
  round: number;
  cards: {
    people: {
      [key: number]: any;
    };
    starships: {
      [key: number]: any;
    };
  };
  cardType: cardType;
  attribute: {
    people: personAtrType;
    starships: starshipAtrType;
  }
  winner: winnerType;
};

const initialState: stateType = {
  player1: {
    score: 0,
    cardId: undefined,
  },
  player2: {
    score: 0,
    cardId: undefined,
  },
  round: 1,
  cards: {
    people: {},
    starships: {},
  },
  cardType: config.cardType.people,
  attribute: {
    people: config.attributes.people[0],
    starships: config.attributes.starships[0],
  },
  winner: undefined
};

export const reducer = (state: stateType = initialState, action: actionType): stateType => {
  switch (action.type) {
    case INCREMENT_ROUND:
      return {
        ...state,
        round: state.round + 1,
      };
    case SET_CARD_TYPE:
      return {
        ...state,
        cardType: action.value,
      };
    case SET_ATTRIBUTE:
      return {
        ...state,
        attribute: {
          ...state.attribute,
          [action.value.cardType]: action.value.attribute
        } 
      };
    case SET_PLAYER_CARD_ID:
      let player: playerNrType = action.value.player;
      return {
        ...state,
        [player]: {
          ...state[player],
          cardId: action.value.cardId,
        },
      };
    case CLEAR_PLAYERS_CARD_ID:
      return {
        ...state,
        player1: {
          ...state.player1,
          cardId: undefined,
        },
        player2: {
          ...state.player2,
          cardId: undefined,
        },
      };
    case SET_CARD:
      const { cardId, card } = action.value;
      const cardType: cardType = action.value.cardType;
      return {
        ...state,
        cards: {
          ...state.cards,
          [cardType]: {
            ...state.cards[cardType],
            [cardId]: card,
          },
        },
      };
    case INCREASE_PLAYER_SCORE:
      player = action.value.player;
      return {
        ...state,
        [player]: {
          ...state[player],
          score: state[player].score + 1
        },
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.value.winner
      };
    case CLEAR_WINNER:
      return {
        ...state,
        winner: undefined
      };
    default:
      return state;
  }
};
