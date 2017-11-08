import React from 'react';
import { Link } from 'react-router-dom';

// For Redirect
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default function LoginUserComponent(props) {
  let theUser = {
    username: 'admin',
    password: 'welcome'
  };

  function handleOnSubmit(event) {
    event.preventDefault();
    const $form = event.target;

    let loginUser = {};
    loginUser = {
      username: $form.username.value ? $form.username.value : $form.username.placeholder,
      password: $form.password.value ? $form.password.value : $form.password.placeholder
    };

    console.log('USER LOGIN FORM', loginUser);
    console.log(props);

    props.loginUser(loginUser).then(() => {
      props.history.push('/main');
    });
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="input-field col s3">
            User ID :
            <input placeholder={theUser.username} name="username" id="username" type="text" className="validate" />
          </div>

          <div className="input-field col s3">
            Password:
            <input placeholder={theUser.password} name="password" type="password" className="validate" />
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
