import updateRental from './updateRental1';
import data from '../mock-data';
fetch = require('jest-fetch-mock');

describe('updateRental', () => {
  let theRental = {
    address: '3232 Cassandra Ct',
    agentId: 1,
    bath: '10',
    bed: '20',
    city: 'Dublin',
    // contactinfo: 'jonnybranstorm@mansionrents.com',
    // contactname: 'Jimmy Mogul',
    cooling: 'yes',
    description: 'For anyone who wants to negotiate...four words TALK TO THE HAND!',
    heating: 'true',
    // id: 'sdfafdas',
    parking: '5 car garage',
    // photoUrl: '6.jpg',
    price: '1212',
    sqft: '15930',
    state: 'CA',
    year: '2001'
  };
  it('Calls fetch and updates a rental ', () => {
    //console.log('RENTAL: ', data.rentals[0]);
    fetch.mockResponse(JSON.stringify(theRental));

    return updateRental(0, theRental, '1', '2').then(rental => {
      expect(rental).toEqual(theRental);
    });
  }); // end of it

  afterAll(() => {
    fetch.mockReset();
  });
});
