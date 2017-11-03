import React from 'react';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

/*
// if not defined, show NA
*/

export default function LoginUserComponent(props) {
  //if (!item) return null;
  let action = 'add';
  //console.log('CREATE_FORM_COMPONENT >>>>>>>>>>>>>>>>' + action);
  //console.log(props);
  let disabled = '';
  if (action === 'add') {
    disabled = 'disabled';
  }

  let random = Math.floor(Math.random() * 30);
  let theUser = {
    username: 'jake',
    password: 'welcome'
  };

  function handleOnSubmit(event) {
    event.preventDefault();
    const $form = event.target;
    ////console.log('onSubmit', action);

    let loginUser = {};
    loginUser = {
      username: $form.username.value ? $form.username.value : $form.username.placeholder,
      password: $form.password.value ? $form.password.value : $form.password.placeholder
    };

    //alert('user creation: ', newUser.username);
    console.log('USER LOGIN FORM', loginUser);
    //alert('login user');
    // UNCOMMENT TO CREATE USER
    props.loginUser(loginUser).then(() => {});

    //window.location = '/';
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="input-field col s3">
            User ID :
            <input placeholder={theUser.username} name="username" id="username" type="text" className="validate" />
            {/* <label for="address"> </label> */}
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

          <div className="input-field col s3" />
        </div>
      </form>
    </div>
  );
}
