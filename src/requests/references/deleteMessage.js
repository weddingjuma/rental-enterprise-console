export default function deleteMessages(messageId, { databaseId, token }) {
  ////console.log('deteMessag');
  return fetch(`https://api.airtable.com/v0/${databaseId}/messages/${messageId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      // //console.log(messageId);
      // //console.log('deleteMessage Method');
      // //console.log(data);
      return data;
    }); // end of then
} // end of function
