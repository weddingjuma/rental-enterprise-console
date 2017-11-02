import env from '../env';

export default function createRental(rental, { databaseId, token }) {
  ////console.log('updateMessage');

  console.log('CREATE_RENTALS FUNC');
  console.log('BEFORE', rental);

  // 1. get the 'rental' object
  rental = {
    // id: $form.id.value ? $form.id.value : $form.id.placeholder,
    address: rental.address,
    city: rental.city,
    state: 'CA',
    photoUrl: rental.photourl,
    agentId: 1,
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
  console.log('AFTER', rental);

  return (
    fetch(`${env.API_BASE_URL}/rentals`, {
      // return fetch(`https://api.airtable.com/v0/${databaseId}/rentals`, {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rental)
    })
      .then(handleErrors)
      .then(response => response.json())
      // .then(record => {
      //   ////console.log(record);
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
      //   ////console.log('UpdateMsg message');
      //   ////console.log(message);
      //   return rental;
      // })
      .catch(function(error) {
        ////console.log(error);
      })
  );
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    ////console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
