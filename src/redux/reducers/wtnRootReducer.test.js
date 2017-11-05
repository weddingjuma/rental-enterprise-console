import rootReducer from './wtnRootReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

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

describe('wtnRootReducer', () => {
  it('action.type GET_PREFS', () => {
    const action = {
      type: 'GET_PREFS',
      menuItems: [...data.rentals]
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
        price: 1000
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

      // 3. search objects
      search: {
        keyword: 'all',
        sort: 'all',
        price: 1000
      }
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  // start of test
  it('action.type SET_SEARCH', () => {
    const action = {
      type: 'SET_SEARCH',
      search: {
        keyword: 'all',
        sort: 'all',
        price: 1000
      }
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
        price: 1000
      }
    };

    deepFreeze(currentState);

    const nextState = {
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
        price: 1000
      }
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

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
});
