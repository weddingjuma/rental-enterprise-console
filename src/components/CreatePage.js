import React from 'react';

import CreatePageLayout from './CreatePageLayout';

export default function Page(props) {
  //
  console.log('CREATEPAGE COMPONENT');
  console.log('RENTALS: ', props.rentals);
  //console.log(props);

  ////console.log('IndexPage SELECTED: ' + props.selectedMessageIds);
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
