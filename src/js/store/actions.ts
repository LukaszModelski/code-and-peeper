// actions types
export const INCREMENT_ROUND: string = 'INCREMENT_ROUND';

// actions creators
export type actionType = {
  type: string;
  value?: any;
}

export const incrementRound = (): actionType => ({
  type: INCREMENT_ROUND,
});
