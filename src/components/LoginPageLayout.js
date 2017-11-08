import React from 'react';

import HeaderComponent from './HeaderComponent';

import LoginUserComponent from './LoginUserComponent';

export default function PageLayout(props) {
  //
  console.log('LOGIN PAGE LAYOUT COMP');
  console.log(props);

  return (
    <div className="PageLayout">
      <HeaderComponent
        onShowForm={props.onShowForm}
        title={'Search & Report'}
        //
        authenticatedUser={props.authenticatedUser}
        userRole={props.userRole}
      />

      <LoginUserComponent //
        loginUser={props.loginUser}
        history={props.history}
        onCancel={props.onCancel}
      />
    </div>
  );
}
