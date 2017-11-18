export default function createMessage(message, { databaseId, token }) {
  //mc//console.log('updateMessage');

  return fetch(`https://api.airtable.com/v0/${databaseId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: message
    })
  })
    .then(response => response.json())
    .then(record => {
      // //console.log('create Record');
      // //console.log(record);
      return {
        id: record.id,
        body: record.fields.body,
        subject: record.fields.subject,
        read: record.fields.read,
        starred: record.fields.starred,
        labels: record.fields.labels ? record.fields.labels.split(',') : ''
      };
    })
    .then(message => {
      //mc//console.log('UpdateMsg message');
      //mc//console.log(message);
      return message;
    });
} // end of function
