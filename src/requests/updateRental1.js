import env from '../env';

export default function updateMessage(rentalId, rental, { databaseId, token }) {
  //console.log('UPDATEMESSAGE');
  //console.log(rentalId);
  //console.log(changes);

//mc//console.log('UPDATE_RENTALS FUNC');
  //console.log('BEFORE', rental);
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
  //console.log('AFTER', rental);

  //console.log('RENTAL IN REQ API: ', rental);
  // return fetch(`https://api.airtable.com/v0/${databaseId}/rentals/${rentalId}`, {
  // token = localStorage.getItem('token');
  //console.log('TOKEN', token);
  return fetch(`${env.API_BASE_URL}/rentals/${rentalId}`, {
    method: 'PATCH',

    headers: {
      Authorization: `Bearer ${token}`,
      //,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rental)
  })
    .then(response => response.json())
    .then(record => {
      //mc//console.log('updateRental Record');
      //mc//console.log(changes);
      return rental;
      // {
      //   id: record.id,
      //   address: record.fields.address,
      //   city: record.fields.city,
      //   contactname: record.fields.contactname,
      //   contactinfo: record.fields.contactinfo,
      //   sqft: record.fields.sqft,
      //   photourl: record.fields.photourl,
      //   price: record.fields.price,
      //   description: record.fields.description,
      //   bed: record.fields.bed,
      //   bath: record.fields.bath,
      //   year: record.fields.year,
      //   cooling: record.fields.cooling,
      //   parking: record.fields.parking
      // };
    })
    .then(rental => {
      //mc//console.log('UpdateMsg message');
      //mc//console.log(message);
      return rental;
    });
} // end of function
