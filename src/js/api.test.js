import { fetchPersonById } from "./api";
import { config } from '../js/config';

jest.setTimeout(30000);

describe('Every request for person under specific ID should return 200', () => {
  for (let index = 0; index < config.apiPplCount; index++) {
    test(`Person ID: ${index + 1}`, async () => {
      try {
        const response = await fetchPersonById(index + 1);
        expect(response.status).toBe(200);
      } catch(e) {
        fail('request failed');
      }
    });
  }
})
