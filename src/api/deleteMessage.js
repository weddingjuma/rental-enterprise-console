export default function deleteMessages(messageId) {
  // gets the Response object and chain it
  // get response.json() to parse it
  // return fetch('/data/messages.json') //
  //   .then(response => response.json());

  return fetch('https://api.airtable.com/v0/appnspObUvyNgSocu/messages/' + messageId, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer keyG8wwLRrkdRDmjp'
    }
  })
    .then(response => response.json())
    .then(data => {
      // //console.log(messageId);
      // //console.log(data);
      return data;
    }); // end of then
} // end of function
