import { reducer, initialState } from './reducer';
import { SET_ATTRIBUTE } from './actions';

const stateAfterDispatch = {
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
  cardType: 'people',
  attribute: {
    people: 'height',
    starships: 'crew',
  },
  winner: undefined
};

const setAttributeAction = {
  type: SET_ATTRIBUTE,
  value: {
    attribute: 'height',
    cardType: 'people'
  }
}

describe('reducer tests', function () {
  test('dispatch setAttributeAction', () => {
    expect(reducer(initialState, setAttributeAction)).toEqual(stateAfterDispatch);
  });
});
