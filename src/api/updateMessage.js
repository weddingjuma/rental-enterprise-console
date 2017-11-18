export default function updateMessage(messageId, changes) {
  //mc//console.log('updateMessage');

  return fetch('https://api.airtable.com/v0/appnspObUvyNgSocu/messages/' + messageId, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer keyG8wwLRrkdRDmjp',
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
      // //console.log('updateMsg Record');
      // //console.log(changes);
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
