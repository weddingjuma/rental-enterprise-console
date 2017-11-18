import React from 'react';

import HeaderComponent from './HeaderComponent';
// import SearchFormComponent from './SearchFormComponent';
// import CreateFormComponent from './CreateFormComponent';
import BusinessComponent from './BusinessComponent';
// import UserPrefComponent from './UserPrefComponent';

export default function BusinessPageLayout(props) {
  //
//mc//console.log('BUSINESS LAYOUT................');
//mc//console.log(props.authenticatedUser);
  //console.log(props.items);
  let title = 'Report';
  return (
    <div className="PageLayout">
      <HeaderComponent title={title} authenticatedUser={props.authenticatedUser} userRole={props.userRole} />
      {/* <CreateFormComponent rentals={props.rentals} item={{}} /> */}
      {/* authenticatedUser={props.authenticatedUser} userRole={props.userRole} */}
      <BusinessComponent
        rentals={props.rentals}
        items={props.items}
        onAddItem={props.onAddItem}
        authenticatedUser={props.authenticatedUser}
        userRole={props.userRole}
      />
      {/* <UserPrefComponent item={{}} /> */}
    </div>
  );
}
