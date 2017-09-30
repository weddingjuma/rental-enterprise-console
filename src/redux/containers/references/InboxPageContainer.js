// 4C
// 1) import the stuff
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
// 2) import the OrderPage we want to contain
import InboxPage from '../../components/InboxPage';

// 3) import the Processes from the thunks

import createMessageProcess from '../thunks/createMessageProcess';
import getMessagesProcess from '../thunks/getMessagesProcess';
//import deleteMessageProcess from '../thunks/deleteMessageProcess';
import updateMessageProcess from '../thunks/updateMessageProcess';
import updateMessagesProcess from '../thunks/updateMessagesProcess';

// 4) mapStateToProps function
function mapStateToProps(state, ownProps) {
  return {
    selectedMessageIds: state.selectedMessageIds,
    selectedMessageCount: state.selectedMessageCount,
    showComposeForm: state.showComposeForm,
    messages: state.messages
  };
}
// 5) mapDispatchToProps functionto call the dispatches
// move dispatch from App.js and remove 'this.props.store'
// for private method names '_name', rename them to what is to be passed
function mapDispatchToProps(dispatch, ownProps) {
  // //console.log(ownProps);
  // //console.log(ownProps.selectedMessageIds);
  return {
    // onMount
    // DB Processes
    onMount: () => dispatch(getMessagesProcess()),
    // MESSAGES METHODS
    // NON-DB no Process
    onSelectMessage: itemId => dispatch({ type: 'SELECT_MESSAGE', itemId }),
    onDeselectMessage: itemId => dispatch({ type: 'DESELECT_MESSAGE', itemId }),

    // DB Processes
    onStarMessage: itemId => dispatch(updateMessageProcess(itemId, 'star')),
    onUnstarMessage: itemId => dispatch(updateMessageProcess(itemId, 'unstar')),
    onMarkAsReadMessage: itemId => dispatch(updateMessageProcess(itemId, 'read')),
    //
    // TOOLBAR METHODS
    //checkItem : () => dispatch( ()),
    // NON-DB noProcesses
    onOpenComposeForm: () => dispatch({ type: 'COMPOSE', showComposeForm: true }),
    onSelectAllMessages: () => dispatch({ type: 'SELECT_ALL_MESSAGES' }),

    onDeselectAllMessages: () => dispatch({ type: 'DESELECT_ALL_MESSAGES' }),

    // not working
    // DB Processes
    onMarkAsReadSelectedMessages: () => dispatch(updateMessagesProcess('read', '')),

    onMarkAsUnreadSelectedMessages: () => dispatch(updateMessagesProcess('unread', '')),
    onApplyLabelSelectedMessages: labels => dispatch(updateMessagesProcess('addLabel', labels)),
    onRemoveLabelSelectedMessages: labels => dispatch(updateMessagesProcess('removeLabel', labels)),
    // onDeleteSelectedMessages : () => dispatch( ()),

    // COMPOSE EMAIL
    // DB Processes
    onSubmit: ({ subject, body }) => {
      let newMessage = {
        subject: subject,
        body: body,
        read: false,
        starred: false,
        labels: ''
      };
      return dispatch(createMessageProcess(newMessage, false));
    },
    onCancel: () => dispatch({ type: 'COMPOSE', showComposeForm: false })
  };
}
// 6) connectToStore
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// 7) onDidMount
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});
// 8) export compose
export default compose(connectToStore, onDidMount)(InboxPage);
