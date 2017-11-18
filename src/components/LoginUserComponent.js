import React from 'react';
import { Link } from 'react-router-dom';

// For Redirect
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default function LoginUserComponent(props) {
  let theUser = {
    username: '',
    password: ''
  };

  function handleOnSubmit(event) {
    event.preventDefault();
    const $form = event.target;

    let loginUser = {};
    loginUser = {
      username: $form.username.value ? $form.username.value : $form.username.placeholder,
      password: $form.password.value ? $form.password.value : $form.password.placeholder
    };

   //mc//console.log('USER LOGIN FORM', loginUser);
   //mc//console.log(props);

    props.loginUser(loginUser).then(msg => {
     //mc//console.log('msg ', msg);
      if (msg === 'loginError') {
        props.history.push('/login');
      } else {
        props.history.push('/main');
      }
    });
  }

  let errorMsg = '';

  if (props.loginError === 'loginError') {
    errorMsg = 'Invalid user ID and password.';
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="input-field col s3">
            <h5>Login</h5>
          </div>
          <div className="input-field col s3">
            <font color="red">
              {errorMsg}
            </font>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3">
            User ID :
            <input required placeholder={theUser.username} name="username" id="username" type="text" className="validate" />
          </div>

          <div className="input-field col s3">
            Password:
            <input required placeholder={theUser.password} name="password" type="password" className="validate" />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s3">
            <button className="btn waves-effect green waves-light" type="submit" name="action">
              Login
              <i className="material-icons right"> </i>
            </button>
          </div>

          <div className="input-field col s3">
            <Link to="/main">
              <button className="btn waves-effect blue waves-light" type="submit" name="action">
                Cancel
                <i className="material-icons right"> </i>
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
