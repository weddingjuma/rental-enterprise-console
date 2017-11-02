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
    //0 showForm
    showForm: false,
    showForm2: false,
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
  /*
    GET_MESSAGES
    UPDATE_MESSAGE
      star
      unstar
      markRead
  DELETE_MESSAGE
  CREATE_MESSAGE
    SELECT_ALL_MESSAGES
    SELECT_MESSAGE
    DESELECT_ALL_MESSAGES
    DESELECT_MESSAGE
  */
  switch (action.type) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    case 'SET_SEARCH':
      // filter here/////////////////////
      ////console.log('SET_SEARCH ......................', currentState.rentals);
      ////console.log(currentState.search.price);

      // filter by price /////////////////////
      let filterRentals = currentState.rentals;
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
      return { ...currentState, rettals: action.rentals };

    case 'SHOW_FORM':
      ////console.log('SHOW_FORM');

      return { ...currentState, showForm: action.showForm };

    case 'SHOW_FORM2':
      ////console.log('SHOW_FORM2');

      return { ...currentState, showForm2: action.showForm2 };

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

    //////////////////////////////////////////////////////////////////////////////////////////
    case 'GET_YELP':
      ////console.log('rootReducer: GET_YELP with action ', action);
      return { ...currentState, pokemonObj: action.pokemonObj };

    case 'GET_MESSAGES':
      return { ...currentState, messages: action.messages };

    case 'SELECT_MESSAGE':
      const newSelectedMessageIds = currentState.selectedMessageIds;
      newSelectedMessageIds.push(action.itemId);
      return { ...currentState, selectedMessagesIds: newSelectedMessageIds, selectedMessageCount: currentState.selectedMessageCount + 1 };

    case 'DESELECT_MESSAGE':
      const found = currentState.selectedMessageIds.indexOf(action.itemId);
      const newSelectedMessageIds2 = currentState.selectedMessageIds;
      newSelectedMessageIds2.splice(found, 1);
      return { ...currentState, selectedMessagesIds: newSelectedMessageIds2, selectedMessageCount: currentState.selectedMessageCount - 1 };

    case 'SELECT_ALL_MESSAGES':
      ////console.log('SELECTALL');
      let newArr = currentState.messages.map(message => message.id);
      ////console.log(newArr);
      ////console.log(newArr.length);
      return { ...currentState, selectedMessageIds: newArr, selectedMessageCount: newArr.length };

    case 'DESELECT_ALL_MESSAGES':
      ////console.log('DESELECT_ALL_MESSAGES');

      return { ...currentState, selectedMessageIds: [], selectedMessageCount: 0 };

    case 'MARK_ALL_UNREAD':
      ////console.log('MARK_ALL_UNREAD');

      return { ...currentState, selectedMessageIds: [], selectedMessageCount: 0 };
    case 'COMPOSE':
      ////console.log('COMPOSE');

      return { ...currentState, showComposeForm: action.showComposeForm };
    case 'CREATE_MESSAGE':
      ////console.log('CREATE_MESSAGE');

      return { ...currentState, messages: [action.newMessage, ...currentState.messages], showComposeForm: action.showComposeForm };

    case 'DELETE_MESSAGE':
      ////console.log('DELETE_MESSAGE');

      let theState = currentState.messages.filter((message, index) => {
        //if (message.id !== action.itemId) {
        return message.id !== action.itemId;
        //}
      });
      // //console.log('theState');
      // //console.log(theState);
      return { ...currentState, messages: theState };

    case 'UPDATE_MESSAGE':
      // 1 ID
      // 2 star
      // 3 unstar
      // 4 labels
      ////console.log('rootReducer ' + action.type);
      ////console.log(action.itemId);
      ////console.log(action.message);
      ////console.log(action.updateType);

      // delete later ok?
      currentState.selectedMessageIds.forEach(itemId => {
        ////console.log('haha : ' + itemId);
      });

      if (
        action.updateType === 'dev' ||
        action.updateType === 'personal' ||
        action.updateType === 'gschool' ||
        action.updateType === '-dev' ||
        action.updateType === '-personal' ||
        action.updateType === '-gschool' ||
        action.updateType === 'star' ||
        action.updateType === 'unstar' ||
        action.updateType === 'read' ||
        action.updateType === 'unread' ||
        action.updateType === 'addLabel' ||
        action.updateType === 'removeLabel'
      ) {
        let newMessages = currentState.messages;
        // get a new array
        ////console.log('Action type ' + action.updateType);
        newMessages = newMessages.map(
          message =>
            message.id === action.itemId //
              ? action.message //(message.starred = true) //
              : message
        );
        ////console.log(newMessages);

        return { ...currentState, messages: newMessages };
      } else {
        //
        // else if (action.update === 'readSelected' || action.update === 'unreadSelected') {
        //   //
        //   // NOT GOING TO WORK AS reducer can't run Update, only PROCESSES can
        //
        //   let read = false;
        //   if (action.update === 'readSelected') {
        //     read = true;
        //   }
        //   let newMessages = currentState.messages;
        //
        //   let selectedMessageIds = currentState.selectedMessageIds;
        //   selectedMessageIds.forEach(msgid => {
        // ////console.log('selected ids: ' + msgid);
        //
        //     updateMessage(msgid, {
        //       read: read
        //     }) // end of updateMsg
        //       .then(updatedMessage => {
        //         newMessages = newMessages.map(
        //           message =>
        //             message.id === msgid //
        //               ? updatedMessage //(message.read = false) //
        //               : message
        //         ); // end of map
        //       }); // end of then
        // ////console.log(newMessages);
        //   });
        //
        //   return { ...currentState, messages: newMessages };
        // }
        // else break
        //
        break;
      }

    default:
      return currentState;
  }
}
