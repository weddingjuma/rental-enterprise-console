import createUser from '../../requests/createUser';

export default function createUserProcess(newUser, showReport) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'CREATE_USER' });
    return createUser(newUser, {
      databaseId: env.WTN_APP_AIRTABLE_DATABASE_ID,
      token: env.WTN_APP_AIRTABLE_TOKEN
    })
      .then(newUser => {
        dispatch({ type: 'CREATE_USER', showReport: true, showUserForm: false });

        return newUser;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
