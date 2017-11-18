import env from '../env';

export default function createRental(rental, { databaseId, token }) {
  //mc//console.log('updateMessage');

//mc//console.log('CREATE_RENTALS FUNC');
  //console.log('BEFORE', rental);

  // 1. get the 'rental' object
  rental = {
    // id: $form.id.value ? $form.id.value : $form.id.placeholder,
    address: rental.address,
    city: rental.city,
    state: 'CA',
    photoUrl: rental.photourl,
    agentId: rental.agentId,
    // contactname: rental.contactname,
    // contactinfo: rental.contactinfo,
    description: rental.description,
    cooling: rental.cooling,
    bed: rental.bed,
    bath: rental.bath,
    price: rental.price,
    year: rental.year,
    sqft: rental.sqft,
    heating: 'true',
    parking: rental.parking
  };
  ////mc//console.log('AFTER', rental);

  //token = localStorage.getItem('token');
  //console.log('TOKEN', token);
  return (
    fetch(`${env.API_BASE_URL}/rentals`, {
      // return fetch(`https://api.airtable.com/v0/${databaseId}/rentals`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rental)
    })
      .then(handleErrors)
      .then(response => response.json())
      // .then(record => {
      //   //mc//console.log(record);
      //   return {
      //     id: record.id,
      //     address: record.fields.address,
      //     city: record.fields.city,
      //     contactname: record.fields.contactname,
      //     contactinfo: record.fields.contactinfo,
      //     sqft: record.fields.sqft,
      //     photourl: record.fields.photourl,
      //     price: record.fields.price,
      //     description: record.fields.description,
      //     bed: record.fields.bed,
      //     bath: record.fields.bath,
      //     year: record.fields.year,
      //     cooling: record.fields.cooling,
      //     parking: record.fields.parking
      //   };
      // })
      // .then(rental => {
      //   //mc//console.log('UpdateMsg message');
      //   //mc//console.log(message);
      //   return rental;
      // })
      .catch(function(error) {
        //mc//console.log(error);
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
