import createUser from '../../requests/createUser';

export default function createUserProcess(newUser, showReport) {
//mc//console.log('CREATE USER PROCESS.....................');
  return (dispatch, getState, env) => {
    //dispatch({ type: 'CREATE_USER' });
    return createUser(newUser, {
      databaseId: env.WTN_APP_AIRTABLE_DATABASE_ID,
      token: env.WTN_APP_AIRTABLE_TOKEN
    })
      .then(newUser => {
        if (newUser === 'createUserError') {
          throw new Error('createUserError');
        }
      //mc//console.log('CRATE USER NO ERROR ', newUser);
        dispatch({ type: 'CREATE_USER', showReport: true, showUserForm: false, loginError: '' });

        return newUser;
      })
      .catch(error => {
      //mc//console.log('CREATE USER ERRRROR');
        dispatch({ type: 'CREATE_USER_ERROR', loginError: 'createUserError' });
        return 'createUserError';
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
