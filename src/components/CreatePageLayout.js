import React from 'react';

import HeaderComponent from './HeaderComponent';
import SearchFormComponent from './SearchFormComponent';
import CreateFormComponent from './CreateFormComponent';
import BusinessComponent from './BusinessComponent';

import CreateUserComponent from './CreateUserComponent';
import LoginUserComponent from './LoginUserComponent';

// import UserPrefComponent from './UserPrefComponent';

export default function PageLayout(props) {
  //
//mc//console.log('PAGE LAYOUT COMP');
//mc//console.log(props.showUserForm);
//mc//console.log(props.showLoginForm);
//mc//console.log(props.rentals);
  // //console.log(props.items);
  //console.log('SHOWFORM?', props);
  ///  let title = 'add';
  let action = 'add';

  if (props.rental) {
    ///  title = 'Update ' + props.rental.address;
    action = 'update';
  }

  return (
    <div className="PageLayout">
      <HeaderComponent
        onShowForm={props.onShowForm}
        title={'Search & Report'}
        //
        authenticatedUser={props.authenticatedUser}
        userRole={props.userRole}
        userName={props.userName}
      />

      <CreateUserComponent //
        createUser={props.createUser}
        onCancel={props.onCancel}
        authenticatedUser={props.authenticatedUser}
        userRole={props.userRole}
        history={props.history}
        userName={props.userName}
        loginError={props.loginError}
      />
    </div>
  );
}
