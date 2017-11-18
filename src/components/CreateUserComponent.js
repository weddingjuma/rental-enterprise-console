import React from 'react';
// import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

// For Redirect
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

//export default function CreateFormComponent({ rental, deleteRental, onSubmit }) {
export default function CreateUserComponent(props) {
  ////mc//console.log('CREATE USER COMP', props);
  let random = Math.floor(Math.random() * 300);
  let theUser = {
    // username: 'jake' + randm,
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    contact: '',
    role: 'agent'
  };

  function handleOnSubmit(event) {
    event.preventDefault();
    const $form = event.target;
    //  //mc//console.log('onSubmit', action);

    let newUser = {};
    newUser = {
      username: $form.username.value ? $form.username.value : $form.username.placeholder,
      firstName: $form.firstName.value ? $form.firstName.value : $form.firstName.placeholder,
      lastName: $form.lastName.value ? $form.lastName.value : $form.lastName.placeholder,
      password: $form.password.value ? $form.password.value : $form.password.placeholder,
      contact: $form.contact.value ? $form.contact.value : $form.contact.placeholder
      // , role: $form.role.value ? $form.role.value : $form.role.placeholder
    };

    //alert('user creation: ', newUser.username);
    //console.log('USER CREATION FORM', newUser);
    // UNCOMMENT TO CREATE USER
    props.createUser(newUser).then(msg => {
     //mc//console.log('MSG....', msg);
      if (msg === 'createUserError') {
        props.history.push('/register');
      } else {
        props.history.push('/login');
      }
    });
  }

  let errorMsg = '';
 //mc//console.log('loginError ', props.loginError);
  if (props.loginError === 'createUserError') {
    errorMsg = 'Invalid user ID. Use different ID.';
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="input-field col s3">
            <h5>Create User</h5>
          </div>
          <div className="input-field col s3">
            <font color="red">
              {errorMsg}
            </font>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3">
            User Name :
            <input required placeholder={theUser.username} name="username" id="username" type="text" className="validate" />
          </div>
          <div className="input-field col s3">
            First Name:
            <input required placeholder={theUser.firstName} name="firstName" type="text" className="validate" />
          </div>
          <div className="input-field col s3">
            Last Name:
            <input required placeholder={theUser.lastName} name="lastName" type="text" className="validate" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3">
            Contact:
            <input required placeholder={theUser.contact} name="contact" type="text" className="validate" />
          </div>
          {/* <div className="input-field col s3">
            Role:
            <input placeholder={theUser.role} name="role" type="hidden" className="validate" />
          </div> */}
          <div className="input-field col s3">
            Password:
            <input required placeholder={theUser.password} name="password" type="text" className="validate" />
            {/* <input placeholder={theUser.role} name="role" type="hidden" className="validate" /> */}
          </div>
        </div>

        <div className="row">
          <div className="input-field col s3">
            <button className="btn waves-effect green waves-light" type="submit" name="action">
              Create User
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
            {/* <Link to="/login">
              <button className="btn waves-effect blue waves-light" type="submit" name="action">
                Login
                <i className="material-icons right"> </i>
              </button>
            </Link> */}
          </div>

          <div className="input-field col s3">
            {/* <Link to="/main">
              <button className="btn waves-effect blue waves-light" type="submit" name="action">
                Cancel
                <i className="material-icons right"> </i>
              </button>
            </Link> */}
          </div>
        </div>
      </form>
    </div>
  );
}
