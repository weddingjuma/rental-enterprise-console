import getById from './getById';
import data from '../mock-data';
fetch = require('jest-fetch-mock');
describe('getById', () => {
  it('Calls fetch and returns one rental property', () => {
    //console.log('RENTAL: ', data.rentals[0]);
    fetch.mockResponse(JSON.stringify(data.rentals[0]));

    return getById(data.rentals[0].id).then(rental => {
      expect(rental).toEqual(data.rentals[0]);
    });
  }); // end of it

  afterAll(() => {
    fetch.mockReset();
  });
});
