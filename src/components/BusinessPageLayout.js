import React from 'react';

import HeaderComponent from './HeaderComponent';
// import SearchFormComponent from './SearchFormComponent';
// import CreateFormComponent from './CreateFormComponent';
import BusinessComponent from './BusinessComponent';
// import UserPrefComponent from './UserPrefComponent';

export default function BusinessPageLayout(props) {
  //
  //console.log('BUSINESS LAYOUT');
  //console.log(props.rentals);
  //console.log(props.items);
  let title = 'Report';
  return (
    <div className="PageLayout">
      <HeaderComponent title={title} />
      {/* <CreateFormComponent rentals={props.rentals} item={{}} /> */}

      <BusinessComponent rentals={props.rentals} items={props.items} onAddItem={props.onAddItem} />

      {/* <UserPrefComponent item={{}} /> */}
    </div>
  );
}
