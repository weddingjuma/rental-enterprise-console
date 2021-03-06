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
      .then(token => {
        console.log('LOGGEDIN TOKEN: ', token.token);
        // set token to localStorage
        localStorage.setItem('token', token.token);

        // get the user ID
        const { sub: user } = decode(token.token);
        console.log('USER ID', user);
        //

        dispatch({ type: 'LOGIN_USER', authenticatedUser: user, userRole: 'agent', showReport: true, showLoginForm: false });
        return token.token;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
