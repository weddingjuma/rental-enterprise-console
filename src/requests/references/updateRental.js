export default function updateMessage(rentalId, changes, { databaseId, token }) {
  //console.log('UPDATEMESSAGE');
  //console.log(rentalId);
  //console.log(changes);
  changes = {
    // id: $form.id.value ? $form.id.value : $form.id.placeholder,
    address: changes.address,
    city: changes.city,
    photourl: changes.photourl,
    contactname: changes.contactname,
    contactinfo: changes.contactinfo,
    description: changes.description,
    cooling: changes.cooling,
    bed: changes.bed,
    bath: changes.bath,
    price: changes.price,
    year: changes.year,
    heating: 'yes',
    sqft: changes.sqft,
    parking: changes.parking
  };

  return fetch(`https://api.airtable.com/v0/${databaseId}/rentals/${rentalId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: changes
      // {
      //   starred: true,
      //   read: true
      // }
    })
  })
    .then(response => response.json())
    .then(record => {
      //console.log('updateRental Record');
      //console.log(changes);
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
      //mc//console.log('UpdateMsg message');
      //mc//console.log(message);
      return rental;
    });
} // end of function
