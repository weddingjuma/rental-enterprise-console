//import updateMessage from '../../api/updateMessage';
// import deleteMessage from '../../api/deleteMessage';
// import createMessage from '../../api/createMessage';
// import getAllPrefsProcess from '../thunks/getAllPrefsProcess';

// REDUCER
// 1) INITIALIZE VARIABLES FOR THE STATE
// 2) RETURN STATE
export default function wtnRootReducer(
  currentState = {
    // INITIATE VARIABLES
    token: null,
    //0 showForms
    // search rental form
    showForm: false,
    //update rental form
    showForm2: false,

    // login and user creation form
    showLoginForm: false,
    showUserForm: false,

    authenticatedUser: 'guest_user',
    userRole: 'guest_role',
    //1 rentals objects from DB store in state
    rentals: [],
    currentRental: {},

    // 2. level
    level: 'admin',

    // 3. search objects
    search: {
      keyword: 'all',
      sort: 'all',
      price: 0
    },
    // search: {
    //   sort: 'random',
    //   filter: ['none'],
    //   city: 'all',
    //   sqft: 'all',
    //   priceMax: 1000000000,
    //   priceLow: 0,
    //   bed: 20,
    //   bath: 19,
    //   cooling: 'all',
    //   heading: 'all',
    //   parking: 'all'
    // },
    // Mock data items for search results
    //items: null,

    items: [
      {
        id: 1,
        name: 'Sushi Rama (Mock Data)',

        address: '99 Jackson Rd',
        phone: '555-555-5555',

        imagePath: 'https://s3-media4.fl.yelpcdn.com/bphoto/7ULFF9NYu8n3etk1zy7cIg/o.jpg'
      },
      {
        id: 2,
        name: 'Pizza Table (Mock Data)',

        address: '234 Jackson Rd',
        phone: '777-555-5555',

        imagePath: 'https://s3-media1.fl.yelpcdn.com/bphoto/NgLmAmeERhME1BML0Qpfig/o.jpg'
      },
      {
        id: 3,
        name: 'Way Out Burgers (Mock Data)',

        address: '328 Jackson Rd',
        phone: '125-555-5555',

        imagePath: 'https://s3-media1.fl.yelpcdn.com/bphoto/_pFe5IkVh1TMoADBNAZowQ/o.jpg'
      },
      {
        id: 4,
        name: 'China Foodie (Mock Data)',

        address: '992 Jackson Rd',
        phone: '451-555-5555',

        imagePath: 'https://s3-media4.fl.yelpcdn.com/bphoto/QkqPmnxOq3PDktu2BkG5QA/o.jpg'
      },
      {
        id: 5,
        name: 'Dennies (Mock Data)',

        address: '919 Jackson Rd',
        phone: '233-555-5555',

        imagePath: 'https://s3-media1.fl.yelpcdn.com/bphoto/Y54tvkq8rmjvi4ZSg1c5oA/o.jpg'
      }
    ],

    // this.props.store.subscribe(() => {
    //   this.setState(this.props.store.getState());
    // });
    item: ''

    // selectedMessageIds: [],
    //
    // selectedMessageCount: 0, //this.state.selectedMessageIds.length,
    //
    // showComposeForm: false,
    // messages: []
  },
  action
) {
  switch (action.type) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    case 'SET_SEARCH':
      // filter here/////////////////////
      ////console.log('SET_SEARCH ......................', currentState.rentals);
      ////console.log(currentState.search.price);

      // filter by price /////////////////////
      var filterRentals = currentState.rentals;
      if (currentState.search.price === 1000) {
        ////console.log('PRICE FILTER .............................');
        filterRentals = currentState.rentals.filter(rental => {
          ////console.log('PRICE/SEARCH ........................' + rental.price + ' ' + currentState.search.price);
          return Number(rental.price) > Number(currentState.search.price);
        });
      }

      return { ...currentState, search: action.search, rentals: filterRentals };

    case 'SET_SEARCH_SORT':
      // filter here/////////////////////
      ////console.log('SET_SEARCH_SORT ......................', currentState.rentals);
      ////console.log(currentState.search.price);

      // sort by price /////////////////////
      // if (currentState.search.sort === 'price') {
      filterRentals = currentState.rentals;
      ////console.log('PRICE SORT .............................', typeof filterRentals[0].price === 'number');
      const foo = [...currentState.rentals];
      const newFilterRentals = foo.sort((a, b) => {
        return Number(a.price) - Number(b.price);
        // if (a.price < b.price) {
        //   return -1;
        // }
        // if (a.price > b.price) {
        //   return 1;
        // }
        // return 0;
      });
      // }
      ////console.log(filterRentals, 'this should be sorte');

      return { ...currentState, search: action.search, rentals: newFilterRentals };

    case 'SET_SEARCH_WORD':
      // filter here/////////////////////
      ////console.log('SET_SEARCH_WORD......................', currentState.rentals);
      ////console.log(currentState.search.price);

      // // search by keyword //////////////////////////
      if (currentState.search.keyword !== 'all') {
        ////console.log('KEYWORD SEARCH .............................');
        filterRentals = currentState.rentals;

        filterRentals = filterRentals.filter(rental => {
          ////console.log('KEYWORD STUFF................');
          ////console.log(rental.description.indexOf(currentState.search.keyword) >= 0);
          return rental.description.indexOf(currentState.search.keyword) >= 0;
        });
        ////console.log(filterRentals.length);
      }
      return { ...currentState, search: action.search, rentals: filterRentals };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    case 'RESET_SEARCH':
      ////console.log('RESET SEARCH');
      return { ...currentState, rentals: action.rentals };

    case 'SHOW_FORM':
      ////console.log('SHOW_FORM');

      return { ...currentState, showForm: action.showForm };

    case 'SHOW_FORM2':
      ////console.log('SHOW_FORM2');

      return { ...currentState, showForm2: action.showForm2 };
    //////////////////////////////////////////////////////////////////////////////////////////

    // D
    case 'SHOW_USER_FORM':
      console.log('SHOW_USER_FORM');

      return { ...currentState, showUserForm: action.showUserForm, showLoginForm: action.showLoginForm };
    // D
    case 'CREATE_USER':
      console.log('CREATE_USER');
      return { ...currentState, showUserForm: action.showUserForm };
    //////////////////////////////////////////////////////////////////////////////////////////
    case 'SHOW_LOGIN_FORM':
      console.log('SHOW_LOGIN_FORM');

      return { ...currentState, token: action.token, showLoginForm: action.showLoginForm, showUserForm: action.showUserForm };
    case 'LOGOUT':
      console.log('LOGOUT REDUCER');

      return {
        ...currentState,
        token: action.token,
        authenticatedUser: action.authenticatedUser,
        userRole: action.userRole,
        showLoginForm: action.showLoginForm
      };

    case 'LOGIN_USER':
      console.log('LOGIN USER ' + action.token);

      return {
        ...currentState,
        token: action.token,
        authenticatedUser: action.authenticatedUser,
        userRole: action.userRole,
        showLoginForm: action.showLoginForm
      };

    //////////////////////////////////////////////////////////////////////////////////////////

    case 'GET_PREFS':
      ////console.log('GET_PREFS');
      ////console.log(action.rentals);

      let resetSearch = {
        keyword: 'all',
        sort: 'all',
        price: 0
      };
      ////console.log(currentState.search);
      ////console.log(resetSearch);

      return { ...currentState, rentals: action.rentals, search: resetSearch };
    ////////////////////////////////
    case 'GET_RENTAL':
      ////console.log('GET_PREFS');
      ////console.log(action.rentals);

      ////console.log(currentState.search);
      ////console.log(resetSearch);

      return { ...currentState, currentRental: action.rental };

    case 'CREATE_RENTAL':
      ////console.log('CREATE_RENTAL');

      return { ...currentState, rentals: [action.newRental, ...currentState.rentals], showReport: action.showReport, showForm: action.showForm };

    // UPDATE_RENTAL /////////////////////////
    case 'UPDATE_RENTAL':
      ////console.log('UPDATE_RENTAL');

      // 1) get the current state of 'rentals'
      let newRentals = currentState.rentals;
      // 2) Create a new arry of 'rentals' based on the 'rental id' and 'rental'
      newRentals = newRentals.map(
        rental =>
          rental.id === action.updatedRental.id //
            ? action.updatedRental //(message.starred = true) //
            : rental
      );
      ////console.log(newRentals);
      // 3) return the 'currentState' and 'rentals' with the 'newRentals'
      return { ...currentState, rentals: newRentals, showReport: action.showReport };

    default:
      return currentState;
  }
}
