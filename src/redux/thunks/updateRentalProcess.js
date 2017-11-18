import updateRental from '../../requests/updateRental';

export default function updateRentalProcess(updatedRental, showReport) {
  return (dispatch, getState, env) => {
    // dispatch({ type: 'CREATE_MESSAGE' });
    let changes = updatedRental;
    // how to set the changes?
    // 1 hard coded NOPE
    // 2 get from the state

    return updateRental(updatedRental.id, changes, {
      databaseId: env.WTN_APP_AIRTABLE_DATABASE_ID,
      token: env.WTN_APP_AIRTABLE_TOKEN
    })
      .then(updatedRental => {
        // set the STATE 'UPDATE_RENTAL' with the updateRental object
        dispatch({ type: 'UPDATE_RENTAL', updatedRental, showReport: true });
        //console.log('Update Rental ');
        //console.log(updatedRental);
        return updatedRental;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
