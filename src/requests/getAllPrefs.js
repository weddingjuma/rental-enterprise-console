export default function getAllPrefs({ databaseId, token }) {
  // gets the Response object and chain it
  // get response.json() to parse it
  // return fetch('/data/messages.json') //
  //   .then(response => response.json());
  //console.log('GETALLPREFS FUNC');
  // //console.log(databaseId);
  // //console.log(token);
  ///return fetch('https://api.airtable.com/v0/appnspObUvyNgSocu/messages', {
  return fetch(`https://api.airtable.com/v0/${databaseId}/rentals`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      ////console.log(data);
      return data.records.map(record => ({
        id: record.id,
        address: record.fields.address,
        city: record.fields.city,
        contactname: record.fields.contactname,
        contactinfo: record.fields.contactinfo,
        sqft: record.fields.sqft,
        photourl: record.fields.photourl,
        price: record.fields.price,
        description: record.fields.description,
        bed: record.fields.bed,
        bath: record.fields.bath,
        year: record.fields.year,
        cooling: record.fields.cooling,
        parking: record.fields.parking,
        heating: record.fields.heating
      }));
    }) // end of then
    .then(rentals => {
      // //console.log('RENTALS IN GETALLPREFS');
      // //console.log(rentals);
      return rentals;
    })
    .catch(function(error) {
////console.log('error ' + error.message);
      return [{ id: 'error', subject: error.message }];
    });
} // end of function

function handleErrors(response) {
  if (!response.ok) {
////console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
