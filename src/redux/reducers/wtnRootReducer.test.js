import rootReducer from './wtnRootReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

/*
  1) To test run 'npm test -- wtnRootReducer.test.js'
  2) Review the mock data
  3) TEsts

  1. GET_PREFS
  2.SET_SEARCH
  3.SET_SEARCH_SORT
  4.SET_SEARCH_WORD
  5.RESET_SEARCH
  6.SHOW_FORM
  7.SHOW_FORM2
  8. CREATE_USER
  9. SHOW_LOGIN_FORM
  10. LOGIN_USER
  11. GET_RENTAL
  12. CREATE_RENTAL
  13. UPDATE_RENTAL

*/

/*
  ////////////////////////////////////////////////
  1. GET_PREFS is to get all the rental properties.
  ////////////////////////////////////////////////
*/

describe('Reducer Test Getting all properties GET_PREFS', () => {
  it('action.type GET_PREFS', () => {
    const action = {
      type: 'GET_PREFS',
      rentals: [...data.rentals]
    };

    const currentState = {
      showForm: false,
      showForm2: false,
      //1 rentals objects from DB store in state
      rentals: [],

      // 2. level
      level: 'admin',

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      }
    };

    deepFreeze(currentState);

    const nextState = {
      showForm: false,
      showForm2: false,
      //1 rentals objects from DB store in state
      rentals: action.rentals,

      // 2. level
      level: 'admin',

      // 3. search objects default values
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      }
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test
});

/*
    ////////////////////////////////////////////////
    2. SET_SEARCH is to get update the search parameters by price
    the  action sets
    ////////////////////////////////////////////////
  */
describe('Reducer Test Filter by Price SET_SEARCH', () => {
  // start of test
  it('action.type SET_SEARCH', () => {
    const action = {
      type: 'SET_SEARCH',
      search: {
        keyword: 'all',
        sort: 'all',
        price: 1000
      },
      rentals: [...data.rentals]
    };

    const currentState = {
      showForm: false,
      showForm2: false,
      //1 rentals objects from DB store in state
      rentals: [...data.rentals],

      // 2. level
      level: 'admin',

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      }
    };

    deepFreeze(currentState);

    const nextState = {
      showForm: false,
      showForm2: false,
      //1 rentals objects from DB store in state
      rentals: [...data.rentals],

      // 2. level
      level: 'admin',

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'all',
        price: 1000
      }
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    3. SET_SEARCH_SORT is to get update the search parameters by price
    the  action sets
    ////////////////////////////////////////////////
  */
describe('Reducer Test Filter by Price SET_SEARCH_SORT', () => {
  // start of test
  it('action.type SET_SEARCH_SORT', () => {
    const action = {
      type: 'SET_SEARCH',
      search: {
        keyword: 'all',
        sort: 'price',
        price: 0
      },
      rentals: [...data.rentals]
    };

    const currentState = {
      showForm: false,
      showForm2: false,
      //1 rentals objects from DB store in state
      rentals: [...data.rentals],

      // 2. level
      level: 'admin',

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      }
    };

    deepFreeze(currentState);

    const nextState = {
      showForm: false,
      showForm2: false,
      //1 rentals objects from DB store in state
      rentals: [...data.rentals],

      // 2. level
      level: 'admin',

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'price',
        price: 0
      }
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    4. SET_SEARCH_WORD is to get update the search parameters by price
    the  action sets
    ////////////////////////////////////////////////
  */
describe('Reducer Test Filter by Word SET_SEARCH_WORD', () => {
  // start of test
  it('action.type SET_SEARCH_WORDS', () => {
    const action = {
      type: 'SET_SEARCH',
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      },
      filterRentals: [...data.rentals]
    };

    const currentState = {
      //1 rentals objects from DB store in state
      rentals: [...data.rentals],

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      }
    };

    deepFreeze(currentState);

    const nextState = {
      //1 rentals objects from DB store in state
      rentals: [...data.rentals],

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      }
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    5. RESET_SEARCH is to reset the search
    ////////////////////////////////////////////////
  */
describe('Reducer Test RESET_SEARCH', () => {
  // start of test
  it('action.type RESET_SEARCH', () => {
    const action = {
      type: 'RESET_SEARCH',
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      },
      rentals: [...data.rentals]
    };

    const currentState = {
      rentals: [...data.rentals],

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      }
    };

    deepFreeze(currentState);

    const nextState = {
      //1 rentals objects from DB store in state
      rentals: [...data.rentals],

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'all',
        price: 0
      }
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    6. SHOW_FORM
    ////////////////////////////////////////////////
  */
describe('Reducer Test to SHOW_FORM', () => {
  // start of test
  it('action.type SHOW_FORM', () => {
    const action = {
      type: 'SHOW_FORM',
      showForm: true
    };

    const currentState = {
      showForm: false
    };

    deepFreeze(currentState);

    const nextState = {
      showForm: true
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    7. SHOW_FORM2
    ////////////////////////////////////////////////
  */
describe('Reducer Test to SHOW_FORM2', () => {
  // start of test
  it('action.type SHOW_FORM2', () => {
    const action = {
      type: 'SHOW_FORM2',
      showForm2: true
    };

    const currentState = {
      showForm2: false
    };

    deepFreeze(currentState);

    const nextState = {
      showForm2: true
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    8. CREATE_USER
    ////////////////////////////////////////////////
  */
describe('Reducer Test to CREATE_USER', () => {
  // start of test
  it('action.type CREATE_USER', () => {
    const action = {
      type: 'CREATE_USER',
      showUserForm: true
    };

    const currentState = {
      showUserForm: false
    };

    deepFreeze(currentState);

    const nextState = {
      showUserForm: true
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    9. SHOW_LOGIN_FORM
    ////////////////////////////////////////////////
  */
describe('Reducer Test to SHOW_LOGIN_FORM', () => {
  // start of test
  it('action.type SHOW_LOGIN_FORM', () => {
    const action = {
      type: 'SHOW_LOGIN_FORM',
      showLoginForm: true
    };

    const currentState = {
      showLoginForm: false
    };

    deepFreeze(currentState);

    const nextState = {
      showLoginForm: true
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    10. LOGIN_USER
    ////////////////////////////////////////////////
  */
describe('Reducer Test to LOGIN_USER', () => {
  // start of test
  it('action.type LOGIN_USER', () => {
    const action = {
      type: 'LOGIN_USER',
      userRole: 'admin',
      showLoginForm: true
    };

    const currentState = {
      showLoginForm: false,
      userRole: 'guest'
    };

    deepFreeze(currentState);

    const nextState = {
      showLoginForm: true,
      userRole: 'admin'
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    11. GET_RENTAL
    ////////////////////////////////////////////////
  */
describe('Reducer Test to GET_RENTAL', () => {
  // start of test
  it('action.type GET_RENTAL', () => {
    const action = {
      type: 'GET_RENTAL',
      rental: {
        address: '3232 Cassandra Ct',
        bath: '10',
        bed: '20',
        city: 'Dublin',
        contactinfo: 'jonnybranstorm@mansionrents.com',
        contactname: 'Jimmy Mogul',
        cooling: 'yes',
        description: 'For anyone who wants to negotiate...four words TALK TO THE HAND!',
        heating: 'yes',
        id: 'sdfafdas',
        parking: '5 car garage',
        photourl: '/images/6.jpg',
        price: '1212',
        sqft: '15930',
        year: '2001'
      }
    };

    const currentState = {
      currentRental: {}
    };

    deepFreeze(currentState);

    const nextState = {
      currentRental: {
        address: '3232 Cassandra Ct',
        bath: '10',
        bed: '20',
        city: 'Dublin',
        contactinfo: 'jonnybranstorm@mansionrents.com',
        contactname: 'Jimmy Mogul',
        cooling: 'yes',
        description: 'For anyone who wants to negotiate...four words TALK TO THE HAND!',
        heating: 'yes',
        id: 'sdfafdas',
        parking: '5 car garage',
        photourl: '/images/6.jpg',
        price: '1212',
        sqft: '15930',
        year: '2001'
      }
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////
/*
    ////////////////////////////////////////////////
    12. CREATE_RENTAL
    ////////////////////////////////////////////////
  */
describe('Reducer Test to CREATE_RENTAL', () => {
  // start of test
  it('action.type CREATE_RENTAL', () => {
    const action = {
      type: 'CREATE_RENTAL',
      newRental: {
        address: '9999 Cassandra Ct',
        bath: '10',
        bed: '20',
        city: 'Dublin',
        contactinfo: 'jonnybranstorm@mansionrents.com',
        contactname: 'Jimmy Mogul',
        cooling: 'yes',
        description: 'For anyone who wants to negotiate...four words TALK TO THE HAND!',
        heating: 'yes',
        id: 'sdfafdas',
        parking: '5 car garage',
        photourl: '/images/6.jpg',
        price: '1212',
        sqft: '15930',
        year: '2001'
      },
      rentals: [...data.rentals],
      showReport: true,
      showForm: false
    };

    const currentState = {
      rentals: [...data.rentals],
      showReport: true,
      showForm: true
    };

    deepFreeze(currentState);

    const nextState = {
      rentals: [
        {
          address: '9999 Cassandra Ct',
          bath: '10',
          bed: '20',
          city: 'Dublin',
          contactinfo: 'jonnybranstorm@mansionrents.com',
          contactname: 'Jimmy Mogul',
          cooling: 'yes',
          description: 'For anyone who wants to negotiate...four words TALK TO THE HAND!',
          heating: 'yes',
          id: 'sdfafdas',
          parking: '5 car garage',
          photourl: '/images/6.jpg',
          price: '1212',
          sqft: '15930',
          year: '2001'
        },
        ...data.rentals
      ],
      showReport: true,
      showForm: false
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
    ////////////////////////////////////////////////
    13. UPDATE_RENTAL
    ////////////////////////////////////////////////
  */
describe('Reducer Test to UPDATE_RENTAL', () => {
  // start of test
  it('action.type UPDATE_RENTAL', () => {
    const action = {
      type: 'UPDATE_RENTAL',
      newRentals: [...data.rentals],
      showReport: true,
      updatedRental: { id: 3 }
    };

    const currentState = {
      rentals: [...data.rentals],
      showReport: true
    };

    deepFreeze(currentState);

    const nextState = {
      rentals: [...data.rentals],
      showReport: true
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
}); // end of test
////////////////////////////////////////////////////////////////

/*
  CurrentState of VARIABLES

  showForm: false,
  showForm2: false,

  showLoginForm: false,
  showUserForm: false,

  authenticatedUser: 'guest_user',
  userRole: 'guest_role',

  rentals: [],
  currentRental: {},

  level: 'admin',
  search: {
    keyword: 'all',
    sort: 'all',
    price: 0
  },
  */
/* ACTiONS

  SET_SEARCH
  SET_SEARCH_SORT
  SET_SEARCH_WORD
  RESET_SEARCH
  SHOW_FORM
  SHOW_FORM2
  SHOW_USER_FORM
  CREATE_USER
  SHOW_LOGIN_FORM
  LOGIN_USER
  GET_PREFS
  GET_RENTAL
  CREATE_RENTAL
  UPDATE_RENTAL
  */

// // start of test
// it('action.type ADD_ORDER_ITEM', () => {
//   // action pass the itemId2 for ordered item
//   const action = {
//     type: 'ADD_ORDER_ITEM',
//     itemId2: data.menuItems[0].id
//   };
//
//   // current state we have null for order items
//   const currentState = {
//     customerInfo: null,
//     orderItems: [],
//     menuItems: [...data.menuItems]
//   };
//
//   deepFreeze(currentState);
//
//   // //console.log('test');
//   // //console.log(data.menuItems[0].id);
//   // //console.log(data.menuItems[0]);
//   // next state should have menu object in orderItems
//   const nextState = {
//     orderItems: [data.menuItems[0]],
//     customerInfo: null,
//     menuItems: [...data.menuItems]
//   };
//   // //console.log('test --------------------');
//   // //console.log(currentState);
//   // //console.log(rootReducer(currentState, action));
//   // //console.log('next');
//   // //console.log(nextState);
//
//   expect(rootReducer(currentState, action)).toEqual(nextState);
// }); // end of test
