import { cardType, personAtrType, starshipAtrType } from './store/reducer';

type configType = {
  apiPplCount: number;
  apiStarshipCount: number;
  attributes: {
    people: personAtrType[];
    starships: starshipAtrType[];
  };
  cardType: {
    people: cardType;
    starships: cardType;
  };
}

export const config: configType = {
  apiPplCount: 83,
  apiStarshipCount: 17,
  attributes: {
    people: ['mass', 'height'],
    starships: ['crew', 'length', 'cost_in_credits']
  },
  cardType: {
    people: 'people',
    starships: 'starships'
  }
}
