import axios from 'axios';
import { config } from './config';

export const fetchPersonById = async (personId:number): Promise<object> => 
  await axios.get(config.peopleEndpoint + personId);


export const fetchStarshipById = (starshipId:number): Promise<object> => 
  axios.get(config.starsipsEndpoint + starshipId);

