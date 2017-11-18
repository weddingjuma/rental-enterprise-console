import getById from '../../requests/getById';

export default function getByIdProcess(id) {
  //console.log('GETALLPREFSPROCESS');

  return (dispatch, getState, env) => {
    // dispatch({ type: 'CREATE_MESSAGE' });
    // //console.log(env.AIRTABLE_DATABASE_ID);
    // //console.log(env.AIRTABLE_TOKEN);
    // //console.log(env.WTN_APP_AIRTABLE_DATABASE_ID);
    // //console.log(env.WTN_APP_AIRTABLE_TOKEN);
    return getById(id)
      .then(rental => {
        dispatch({ type: 'GET_RENTAL', rental, showForm2: false });
        return rental;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
