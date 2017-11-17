import getAllPrefs from '../../requests/getAllPrefs';

export default function getAllPrefsProcess() {
  //console.log('GETALLPREFSPROCESS');

  return (dispatch, getState, env) => {
    // dispatch({ type: 'CREATE_MESSAGE' });
    // //console.log(env.AIRTABLE_DATABASE_ID);
    // //console.log(env.AIRTABLE_TOKEN);
    // //console.log(env.WTN_APP_AIRTABLE_DATABASE_ID);
    // //console.log(env.WTN_APP_AIRTABLE_TOKEN);
    return getAllPrefs({
      databaseId: env.WTN_APP_AIRTABLE_DATABASE_ID,
      token: env.WTN_APP_AIRTABLE_TOKEN
    })
      .then(rentals => {
        dispatch({ type: 'GET_PREFS', rentals, showUserForm: false, loginError: '', showForm: false });
        dispatch({ type: 'LOGIN_RESET', loginError: '' });

        return rentals;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
