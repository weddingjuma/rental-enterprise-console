export default function createRental(rental, { databaseId, token }) {
  ////console.log('updateMessage');

  //console.log('CREATE_RENTALS FUNC');
  //console.log(rental);

  rental = {
    // id: $form.id.value ? $form.id.value : $form.id.placeholder,
    address: rental.address,
    city: rental.city,
    photourl: rental.photourl,
    contactname: rental.contactname,
    contactinfo: rental.contactinfo,
    description: rental.description,
    cooling: rental.cooling,
    bed: rental.bed,
    bath: rental.bath,
    price: rental.price,
    year: rental.year,
    sqft: rental.sqft,
    heating: 'yes',
    parking: rental.parking
  };

  return fetch(`https://api.airtable.com/v0/${databaseId}/rentals`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: rental
    })
  })
    .then(handleErrors)
    .then(response => response.json())
    .then(record => {
////console.log(record);
      return {
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
        parking: record.fields.parking
      };
    })
    .then(rental => {
      ////console.log('UpdateMsg message');
      ////console.log(message);
      return rental;
    })
    .catch(function(error) {
////console.log(error);
    });
} // end of function

function handleErrors(response) {
  if (!response.ok) {
////console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
