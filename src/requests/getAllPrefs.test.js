import getAllPrefs from './getAllPrefs';
import data from '../mock-data';
fetch = require('jest-fetch-mock');

describe('getAllPrefs', () => {
  it('Calls fetch and returns all rental properties', () => {
    //console.log('RENTAL: ', data.rentals[0]);
    fetch.mockResponse(JSON.stringify(data.rentals));

    return getAllPrefs('1', '2').then(rentals => {
      expect(rentals).toEqual(data.rentals);
    });
  }); // end of it

  afterAll(() => {
    fetch.mockReset();
  });
});
