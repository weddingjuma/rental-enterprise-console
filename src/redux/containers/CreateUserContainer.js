// 4C
// 1) import the stuff
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
// 2C) import the OrderPage we want to contain
import CreatePage from '../../components/CreatePage';

// 3C) import the Processes from the thunks
import getAllPrefsProcess from '../thunks/getAllPrefsProcess';

import createUserProcess from '../thunks/createUserProcess';

// withRouter for Redirection
import { withRouter } from 'react-router-dom';

// 4C) mapStateToProps function
function mapStateToProps(state, ownProps) {
//mc//console.log('CREATEUSERCONTAINTER MAPTOSTATE');
//mc//console.log(state);
  return {
    // authenticatedUser
    authenticatedUser: state.authenticatedUser,
    // userRole
    userRole: state.userRole,
    //
    userName: state.userName,

    loginError: state.loginError
  };
}
// 5C) mapDispatchToProps functionto call the dispatches
// move dispatch from App.js and remove 'this.props.store'
// for private method names '_name', rename them to what is to be passed
function mapDispatchToProps(dispatch, ownProps) {
  // //console.log(ownProps);
  // //console.log(ownProps.selectedMessageIds);
  return {
    // onMount
    // DB Processes
    // get all the prefs on mount
    onMount: () => dispatch(getAllPrefsProcess()),
    getPrefs: () => dispatch(getAllPrefsProcess()),

    // createUser
    createUser: user => {
      let newUser = user;
      return dispatch(createUserProcess(newUser, true));
    }
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
export default compose(connectToStore)(withRouter(CreatePage));
