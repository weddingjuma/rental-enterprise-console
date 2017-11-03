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
      .then(user => {
        dispatch({ type: 'LOGIN_USER', user });
        return user;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
