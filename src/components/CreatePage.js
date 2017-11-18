import React from 'react';

import CreatePageLayout from './CreatePageLayout';

export default function Page(props) {
  //
//mc//console.log('CREATEPAGE COMPONENT');
//mc//console.log('RENTALS: ', props.rentals);
  //console.log(props);

  //mc//console.log('IndexPage SELECTED: ' + props.selectedMessageIds);
  return (
    <CreatePageLayout //
      createUser={props.createUser}
      history={props.history}
      authenticatedUser={props.authenticatedUser}
      userRole={props.userRole}
      userName={props.userName}
      loginError={props.loginError}
    />
  );
}
