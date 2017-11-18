import decode from 'jwt-decode';
//import loginUser from '../../requests/loginUser';

export default function logoutUserProcess(id, password) {
//mc//console.log('LOG OUT PROCESS');

  return (dispatch, getState, env) => {
    // dispatch({ type: 'CREATE_MESSAGE' });
    // //console.log(env.AIRTABLE_DATABASE_ID);
    // //console.log(env.AIRTABLE_TOKEN);
    // //console.log(env.WTN_APP_AIRTABLE_DATABASE_ID);
    // //console.log(env.WTN_APP_AIRTABLE_TOKEN);
    dispatch({
      type: 'LOGOUT',
      token: undefined,
      authenticatedUser: 'guest_user',
      userRole: 'guest_role',
      userName: 'guest_user'
    }); // end of dispatch
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
  //mc//console.log('logout ', localStorage.getItem('token'));
    return 'hi';
    // )
    // .catch(error => {
    //   //dispatch({ type: 'CREATE_MESSAGE' });
    //   localStorage.remove('token');
    // });
  };
}
