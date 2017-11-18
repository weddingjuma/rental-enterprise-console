import decode from 'jwt-decode';
import loginUser from '../../requests/loginUser';

export default function loginUserProcess(id, password) {
 //mc//console.log('LOGIN USER PROCESS');

  return (dispatch, getState, env) => {
    // dispatch({ type: 'CREATE_MESSAGE' });
    // //console.log(env.AIRTABLE_DATABASE_ID);
    // //console.log(env.AIRTABLE_TOKEN);
    // //console.log(env.WTN_APP_AIRTABLE_DATABASE_ID);
    // //console.log(env.WTN_APP_AIRTABLE_TOKEN);
    return loginUser(id, password)
      .then(authentication => {
       //mc//console.log('LOGIN TOKEN: ', authentication, '-', authentication.token);
        // set token to localStorage
        localStorage.setItem('token', authentication.token);
       //mc//console.log('id ', id.username);
        let userName = id.username;
        localStorage.setItem('userName', userName);
        // get the user ID
        const { sub: user } = decode(authentication.token);
       //mc//console.log('USER ID', user);
        //
        // add 'token' to dispatch and return 'token' and user
        dispatch({
          type: 'LOGIN_USER',
          token: authentication.token,
          authenticatedUser: user,
          userRole: 'agent',
          userName: userName,
          showReport: true,
          showLoginForm: false,
          loginError: ''
        });
        return authentication.token;
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_ERROR', loginError: 'loginError' });
        return 'loginError';
        //localStorage.remove('token');
      });
  };
}
