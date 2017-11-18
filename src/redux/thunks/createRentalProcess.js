import createRental from '../../requests/createRental';

export default function createRentalProcess(newRental, showReport) {
  return (dispatch, getState, env) => {
  //mc//console.log('CREATE RENTAL PROCESS ', newRental);
    return createRental(newRental, {
      databaseId: env.WTN_APP_AIRTABLE_DATABASE_ID,
      token: env.WTN_APP_AIRTABLE_TOKEN
    })
      .then(newRental => {
      //mc//console.log('NEW RENTAL', newRental);
        dispatch({ type: 'CREATE_RENTAL', newRental: newRental, showReport: true, showForm: false, showUserForm: false });
        //mc//console.log('createRental');
        //mc//console.log(getState());
        //mc//console.log('bye');
        return newRental;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
