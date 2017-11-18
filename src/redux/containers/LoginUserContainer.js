// 4C
// 1) import the stuff
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

// withRouter for Redirection
import { withRouter } from 'react-router-dom';

// 2C) import the OrderPage we want to contain
import LoginPage from '../../components/LoginPage';

// 3C) import the Processes from the thunks
import getAllPrefsProcess from '../thunks/getAllPrefsProcess';

import loginUserProcess from '../thunks/loginUserProcess';

// 4C) mapStateToProps function
function mapStateToProps(state, ownProps) {
 //mc//console.log('LOGINUSER_CONTAINTER MAPTOSTATE....................');
 //mc//console.log(state);
  return {
    // authenticatedUser
    authenticatedUser: state.authenticatedUser,
    // userRole
    userRole: state.userRole,
    //
    userName: state.userName,
    //
    loginError: state.loginError
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  // //console.log(ownProps);
  // //console.log(ownProps.selectedMessageIds);
  return {
    // onMount
    // DB Processes
    // get all the prefs on mount
    onMount: () => dispatch(getAllPrefsProcess()),

    loginUser: user => {
      let authUser = user;
      return dispatch(loginUserProcess(authUser, true));
    }

    // onCancel: () => dispatch({ type: 'COMPOSE', showComposeForm: false })
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
export default compose(connectToStore)(withRouter(LoginPage));
