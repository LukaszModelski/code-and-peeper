import { INCREMENT_ROUND, SET_CARD_TYPE, SET_PERSON_ATTRIBUTE, SET_STARSHIP_ATTRIBUTE, actionType } from './actions';
import { config }  from '../config'

export type cardType =  'people' | 'starships';
export type personAtrType =  'mass' | 'height';
export type starshipAtrType =  'crew' | 'length' | 'cost_in_credits';

export type stateType = {
  player1: {
    score: number;
    card: number | undefined;
  },
  player2: {
    score: number;
    card: number;
  }
  round: number;
  people: {};
  starships: {};
  cardType: cardType;
  personAtr: personAtrType;
  starshipAtr:starshipAtrType;
}

const initialState: stateType = {
  player1: {
    score: 0,
    card: undefined,
  },
  player2: {
    score: 0,
    card: undefined,
  },
  round: 1,
  people: {},
  starships: {},
  cardType: config.cardType.people,
  personAtr: config.attributes.people[0],
  starshipAtr: config.attributes.starships[0],
};

export const reducer = (state: stateType = initialState, action: actionType): stateType => {
  switch (action.type) {
    case INCREMENT_ROUND:
      return {
        ...state,
        round: state.round + 1
      };
    case SET_CARD_TYPE:
      return {
        ...state,
        cardType: action.value
      };
    case SET_PERSON_ATTRIBUTE:
      return {
        ...state,
        personAtr: action.value
      };
    case SET_STARSHIP_ATTRIBUTE:
      return {
        ...state,
        starshipAtr: action.value
      };
    default:
      return state;
  }
};
