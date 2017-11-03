import env from '../env';
export default function loginUser(user) {
  console.log('LOGINUSER FUNC');
  console.log('BEFORE', user);

  user = {
    username: user.username,
    password: user.password
  };
  console.log('after', user);

  return (
    fetch(`${env.API_BASE_URL}/authenticate/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(handleErrors)
      .then(response => {
        return response.json();
      })
      // .then(token => {
      //   console.log('TOKEN FROM LOGIN');
      //   console.log(token);
      //   return token;
      // })
      .catch(function(error) {
        ////console.log('error ' + error.message);
        return [{ id: 'error', subject: error.message }];
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
