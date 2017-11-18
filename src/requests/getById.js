import env from '../env';
export default function getById(id) {
  // fetch()
  // gets the Response object and chain it
  // get response.json() to parse it
  // return fetch('/data/messages.json') //
  //   .then(response => response.json());
  //console.log('GETALLPREFS FUNC');
  // //console.log(databaseId);
  // //console.log(token);

  /*
  0. Restart React if changes to env, start both React and APIs
  1. remove the headers for APIs
  2. add   import env from '../env';
  3. Replace air table with fetch(  `${env.API_BASE_URL}/rentals`, {
  4. remove 'record.field' for the AIRTABLE
  5. use 'inspect' on Chrome in
  6. 'Network' look for 'rentals'
  7. Click on it to see the 'Response' if it return any data
  8. Userequired and view in the 'console' of the browser
  9. To view APIrequired, view the server

  */
  // AIRTABLE
  //return fetch(`https://api.airtable.com/v0/${databaseId}/rentals`, {
  return (
    fetch(
      `${env.API_BASE_URL}/rentals/${id}`,
      {
        // AIRTABLE `https://api.airtable.com/v0/${databaseId}/rentals`, {
        // comment out for APIs
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      }
    )
      .then(handleErrors)
      .then(response => {
        return response.json();
      })
      // .then(data => {
      // //mc//console.log('THE DATA: ', data);
      //   return data.records.map(record => ({
      //     id: record.id,
      //     address: record.address,
      //     city: record.city,
      //     contactname: record.agentId,
      //     contactinfo: record.agentId,
      //     sqft: record.sqft,
      //     photourl: record.photoUrl,
      //     price: record.price,
      //     description: record.description,
      //     bed: record.bed,
      //     bath: record.bath,
      //     year: record.year,
      //     cooling: record.cooling,
      //     parking: record.parking,
      //     heating: record.heating
      //   }));
      //   //mc//console.log(data);

      // }) // end of then
      .then(rentals => {
        ////mc//console.log('RENTAL IN GETBYID');
        ////mc//console.log(rentals);
        return rentals;
      })
      .catch(function(error) {
        //mc//console.log('error ' + error.message);
        return [{ id: 'error', subject: error.message }];
      })
  );
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    //mc//console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
