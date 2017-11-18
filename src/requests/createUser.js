///import { isEmp } from '../utils/JSUtils';
import env from '../env';

export default function createUser(user, { databaseId, token }) {
  //mc//console.log('updateMessage');

//mc//console.log('CREATE_USER FUNC........');
//mc//console.log('BEFORE', user);

  // 1. get the 'user' object
  user = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    contact: user.contact,
    role: user.role
  };
//mc//console.log('AFTER...', user);
  return fetch(`${env.API_BASE_URL}/users`, {
    // return fetch(`https://api.airtable.com/v0/${databaseId}/rentals`, {
    method: 'POST',
    headers: {
      // Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(handleErrors)
    .then(response => {
      return response.json();
    })
    .catch(function(error) {
    //mc//console.log('CREATE USER FUNC ERR', error);
      return 'createUserError'; //[{ id: 'error', subject: error.message }];
    });
} // end of function

function handleErrors(response) {
  if (!response.ok) {
    //mc//console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
