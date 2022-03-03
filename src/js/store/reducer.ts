import { INCREMENT_ROUND, actionType } from './actions';

export type stateType = {
  score: {
    player1: number;
    player2: number;
  };
  round: number;
  people: {};
  starships: {};
}

const initialState: stateType = {
  score: {
    player1: 0,
    player2: 0
  },
  round: 1,
  people: {},
  starships: {},
};

export const reducer = (state: stateType = initialState, action: actionType): stateType => {
  switch (action.type) {
    case INCREMENT_ROUND:
      return {
        ...state,
        round: state.round + 1
      };
    default:
      return state;
  }
};
