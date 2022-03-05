import { cardType, personAtrType, starshipAtrType } from './reducer';

// actions types
export const INCREMENT_ROUND: string = 'INCREMENT_ROUND';
export const SET_CARD_TYPE: string = 'SET_CARD_TYPE';
export const SET_PERSON_ATTRIBUTE: string = 'SET_PERSON_ATTRIBUTE';
export const SET_STARSHIP_ATTRIBUTE: string = 'SET_STARSHIP_ATTRIBUTE';

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

export const setPersonAttribute = (attribute: personAtrType): actionType => ({
  type: SET_PERSON_ATTRIBUTE,
  value: attribute
});

export const setStarshipAttribute = (attribute: starshipAtrType): actionType => ({
  type: SET_STARSHIP_ATTRIBUTE,
  value: attribute
});
