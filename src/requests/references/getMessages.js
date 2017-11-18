export default function getMessages({ databaseId, token }) {
  // gets the Response object and chain it
  // get response.json() to parse it
  // return fetch('/data/messages.json') //
  //   .then(response => response.json());

  ///return fetch('https://api.airtable.com/v0/appnspObUvyNgSocu/messages', {
  return fetch(`https://api.airtable.com/v0/${databaseId}/messages`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleErrors)
    .then(response => response.json())
    .then(data => {
      //mc//console.log(data);
      return data.records.map(record => ({
        id: record.id,
        body: record.fields.body,
        subject: record.fields.subject,
        read: record.fields.read,
        starred: record.fields.starred,
        labels: record.fields.labels ? record.fields.labels.split(',') : ''
      }));
    }) // end of then
    .then(messages => {
      //mc//console.log('FINAL');
      //mc//console.log(messages);
      return messages;
    })
    .catch(function(error) {
      //console.log('error ' + error.message);
      return [{ id: 'error', subject: error.message }];
    });
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    //console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
