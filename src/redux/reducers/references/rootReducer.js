//import updateMessage from '../../api/updateMessage';
// import deleteMessage from '../../api/deleteMessage';
// import createMessage from '../../api/createMessage';

export default function rootReducer(
  currentState = {
    selectedMessageIds: [],

    selectedMessageCount: 0, //this.state.selectedMessageIds.length,

    showComposeForm: false,
    messages: []
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
      //console.log('SELECTALL');
      let newArr = currentState.messages.map(message => message.id);
      //console.log(newArr);
      //mc//console.log(newArr.length);
      return { ...currentState, selectedMessageIds: newArr, selectedMessageCount: newArr.length };

    case 'DESELECT_ALL_MESSAGES':
      //console.log('DESELECT_ALL_MESSAGES');

      return { ...currentState, selectedMessageIds: [], selectedMessageCount: 0 };

    case 'MARK_ALL_UNREAD':
      //console.log('MARK_ALL_UNREAD');

      return { ...currentState, selectedMessageIds: [], selectedMessageCount: 0 };
    case 'COMPOSE':
      //console.log('COMPOSE');

      return { ...currentState, showComposeForm: action.showComposeForm };
    case 'CREATE_MESSAGE':
      //console.log('CREATE_MESSAGE');

      return { ...currentState, messages: [action.newMessage, ...currentState.messages], showComposeForm: action.showComposeForm };

    case 'DELETE_MESSAGE':
      //console.log('DELETE_MESSAGE');

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
      //console.log('rootReducer ' + action.type);
      //console.log(action.itemId);
      //console.log(action.message);
      //console.log(action.updateType);

      // delete later ok?
      currentState.selectedMessageIds.forEach(itemId => {
        //console.log('haha : ' + itemId);
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
        // 1) get the current state of 'messages'
        let newMessages = currentState.messages;
        // 2) create a new array of 'messages' based on the passed 'itemId' and 'message'
        //console.log('Action type ' + action.updateType);
        newMessages = newMessages.map(
          message =>
            message.id === action.itemId //
              ? action.message //(message.starred = true) //
              : message
        );
        //console.log(newMessages);
        // 3) return the 'currentState' and 'messages' with newMessages array
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
        //     //console.log('selected ids: ' + msgid);
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
        //     //console.log(newMessages);
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
