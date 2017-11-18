import React from 'react';

import LoginPageLayout from './LoginPageLayout';

export default function Page(props) {
  //
//mc//console.log('LOGIN PAGE COMPONENT');
//mc//console.log(props);

  return (
    <LoginPageLayout //
      loginUser={props.loginUser}
      history={props.history}
      authenticatedUser={props.authenticatedUser}
      userRole={props.userRole}
      userName={props.userName}
      loginError={props.loginError}
    />
  );
}
