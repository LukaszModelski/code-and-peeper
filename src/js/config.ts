import { cardType, personAtrType, starshipAtrType } from './store/reducer';

type configType = {
  apiPplCount: number;
  apiStarshipCount: number;
  peopleEndpoint: string;
  starsipsEndpoint: string;
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
  apiStarshipCount: 35,
  peopleEndpoint: 'https://swapi.dev/api/people/',
  starsipsEndpoint: 'https://swapi.dev/api/starships/',
  attributes: {
    people: ['mass', 'height'],
    starships: ['crew', 'length', 'cost_in_credits']
  },
  cardType: {
    people: 'people',
    starships: 'starships'
  }
}
