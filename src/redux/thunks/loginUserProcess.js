import decode from 'jwt-decode';
import loginUser from '../../requests/loginUser';

export default function loginUserProcess(id, password) {
  //console.log('GETALLPREFSPROCESS');

  return (dispatch, getState, env) => {
    // dispatch({ type: 'CREATE_MESSAGE' });
    // //console.log(env.AIRTABLE_DATABASE_ID);
    // //console.log(env.AIRTABLE_TOKEN);
    // //console.log(env.WTN_APP_AIRTABLE_DATABASE_ID);
    // //console.log(env.WTN_APP_AIRTABLE_TOKEN);
    return loginUser(id, password)
      .then(authentication => {
        console.log('LOGGEDIN TOKEN: ', authentication, '-', authentication.token);
        // set token to localStorage
        localStorage.setItem('token', authentication.token);

        // get the user ID
        const { sub: user } = decode(authentication.token);
        console.log('USER ID', user);
        //
        // add 'token' to dispatch and return 'token' and user
        dispatch({ type: 'LOGIN_USER', token: authentication.token, authenticatedUser: user, userRole: 'agent', showReport: true, showLoginForm: false });
        return authentication.token;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
        localStorage.remove('token');
      });
  };
}
