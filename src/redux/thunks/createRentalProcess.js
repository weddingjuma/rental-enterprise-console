import createRental from '../../requests/createRental';

export default function createRentalProcess(newRental, showReport) {
  return (dispatch, getState, env) => {
    // dispatch({ type: 'CREATE_MESSAGE' });
    return createRental(newRental, {
      databaseId: env.WTN_APP_AIRTABLE_DATABASE_ID,
      token: env.WTN_APP_AIRTABLE_TOKEN
    })
      .then(newRental => {
        dispatch({ type: 'CREATE_RENTAL', newRental: newRental, showReport: true, showForm: false });
    ////console.log('createRental');
    ////console.log(getState());
    ////console.log('bye');
        return newRental;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
