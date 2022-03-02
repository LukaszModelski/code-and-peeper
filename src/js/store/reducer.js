import { INCREMENT_ROUND} from './actions';

const initialState = {
  score: {
    player1: 0,
    player2: 0
  },
  round: 1,
  people: {},
  starships: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ROUND:
      return {
        ...state,
        round: round + 1
      };
    default:
      return state;
  }
};
