import { setCardType, setAttribute, SET_CARD_TYPE, SET_ATTRIBUTE } from './actions.ts';

const cardTypeAction = {
  type: SET_CARD_TYPE,
  value: 'people'
}

const setAttributeAction = {
  type: SET_ATTRIBUTE,
  value: {
    attribute: 'mass',
    cardType: 'starships'
  }
}

describe('action creators tests', function () {
  test('setCardType', () => {
    expect(setCardType('people')).toEqual(cardTypeAction);
  });
  test('setAttribute', () => {
    expect(setAttribute('mass', 'starships')).toEqual(setAttributeAction);
  });
});
