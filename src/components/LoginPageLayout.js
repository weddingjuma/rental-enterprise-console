import React from 'react';

import HeaderComponent from './HeaderComponent';

import LoginUserComponent from './LoginUserComponent';

export default function PageLayout(props) {
  //
//mc//console.log('LOGIN PAGE LAYOUT COMP');
//mc//console.log(props);

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

      <LoginUserComponent //
        loginUser={props.loginUser}
        userRole={props.userRole}
        userName={props.userName}
        history={props.history}
        onCancel={props.onCancel}
        loginError={props.loginError}
      />
    </div>
  );
}
