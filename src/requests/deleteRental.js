import env from '../env';

export default function deleteRental(rentalId, { databaseId, token }) {
  ////console.log('deteMessag');

  return fetch(`${env.API_BASE_URL}/rentals/${rentalId}`, {
    //  return fetch(`https://api.airtable.com/v0/${databaseId}/rentals/${rentalId}`, {
    method: 'DELETE'
    // ,
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  })
    .then(response => response.json())
    .then(data => {
      // //console.log(messageId);
      ////console.log('deleteRental Method');
      // //console.log(data);
      return data;
    }); // end of then
} // end of function
