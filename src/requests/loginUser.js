import env from '../env';
export default function loginUser(user) {
 //mc//console.log('LOGINUSER FUNC');
 //mc//console.log('BEFORE', user);

  user = {
    username: user.username,
    password: user.password
  };
 //mc//console.log('after', user);

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
      // //mc//console.log('TOKEN FROM LOGIN');
      // //mc//console.log(token);
      //   return token;
      // })
      .catch(function(error) {
       //mc//console.log('error ' + error.message);
        return [{ id: 'error', subject: error.message }];
      })
  );
} // end of function

function handleErrors(response) {
  if (!response.ok) {
   //mc//console.log(response);
    throw Error(response.status + ' ' + response.statusText + ' error');
  }
  return response;
}
