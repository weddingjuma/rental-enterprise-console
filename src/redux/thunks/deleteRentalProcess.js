import deleteRental from '../../requests/deleteRental';

export default function deleteRentalProcess(newRental, showReport) {
  return (dispatch, getState, env) => {
    // dispatch({ type: 'CREATE_MESSAGE' });
    return deleteRental(newRental.id, {
      databaseId: env.WTN_APP_AIRTABLE_DATABASE_ID,
      token: env.WTN_APP_AIRTABLE_TOKEN
    })
      .then(newRental => {
        dispatch({ type: 'DELETE_RENTAL', newRental: newRental, showReport: true });
    ////console.log('deleteRental');
    ////console.log(getState());
    ////console.log('bye');
        return newRental;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
