import React from 'react';
// import { Route, Redirect } from 'react-router';
// import { Link } from 'react-router-dom';

/*
// if not defined, show NA
*/

//export default function CreateFormComponent({ rental, deleteRental, onSubmit }) {
export default function CreateUserComponent(props) {
  //if (!item) return null;
  ///let action = 'add';
  //console.log('CREATE_FORM_COMPONENT >>>>>>>>>>>>>>>>' + action);
  //console.log(props);

  // let disabled = '';
  // if (action === 'add') {
  //   disabled = 'disabled';
  // }

  let random = Math.floor(Math.random() * 300);
  let theUser = {
    username: 'jake' + random,
    firstName: 'Jake',
    lastName: 'Johnson',
    password: 'welcome',
    contact: 'jake@gmail.com',
    role: 'agent'
  };

  function handleOnSubmit(event) {
    event.preventDefault();
    const $form = event.target;
    ////console.log('onSubmit', action);

    let newUser = {};
    newUser = {
      username: $form.username.value ? $form.username.value : $form.username.placeholder,
      firstName: $form.firstName.value ? $form.firstName.value : $form.firstName.placeholder,
      lastName: $form.lastName.value ? $form.lastName.value : $form.lastName.placeholder,
      password: $form.password.value ? $form.password.value : $form.password.placeholder,
      contact: $form.contact.value ? $form.contact.value : $form.contact.placeholder,
      role: $form.role.value ? $form.role.value : $form.role.placeholder
    };

    //alert('user creation: ', newUser.username);
    console.log('USER CREATION FORM', newUser);
    // UNCOMMENT TO CREATE USER
    props.createUser(newUser).then(() => {
      ////console.log('the end');
      // <Redirect to="/" push />;
      //window.location = '/';
    });

    //window.location = '/';
  }

  // function deleteItem(event) {
  //   event.preventDefault();
  //
  //   props.deleteRental(props.rental);
  //
  // }

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="input-field col s2">
            User ID :
            <input placeholder={theUser.username} name="username" id="username" type="text" className="validate" />
          </div>
          <div className="input-field col s2">
            First Name:
            <input placeholder={theUser.firstName} name="firstName" type="text" className="validate" />
          </div>
          <div className="input-field col s2">
            Last Name:
            <input placeholder={theUser.lastName} name="lastName" type="text" className="validate" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s2">
            Contact:
            <input placeholder={theUser.contact} name="contact" type="text" className="validate" />
          </div>
          <div className="input-field col s2">
            Role:
            <input placeholder={theUser.role} name="role" type="text" className="validate" />
          </div>
          <div className="input-field col s2">
            Password:
            <input placeholder={theUser.password} name="password" type="text" className="validate" />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s3">
            <button className="btn waves-effect green waves-light" type="submit" name="action">
              Create User
              <i className="material-icons right"> </i>
            </button>
          </div>

          <div className="input-field col s3" />
        </div>
      </form>
    </div>
  );
}
