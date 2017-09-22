import React from 'react';

import HeaderComponent from './HeaderComponent';

//import SearchFormComponent from './SearchFormComponent';
import CreateFormComponent from './CreateFormComponent';
//import BusinessComponent from './BusinessComponent';
//import UserPrefComponent from './UserPrefComponent';

export default function CreateFormPageLayout(props) {
  //
  console.log('CREATEFORM LAYOUT.............');
  // console.log(props.rentals);
  // console.log(props.items);
  // console.log(props.rental);
  // console.log(props);
  let title = 'Create Property';
  let action = 'add';

  if (props.rental) {
    title = 'Update ' + props.rental.address;
    action = 'update';
  }
  return (
    <div className="PageLayout">
      <HeaderComponent title={title} />

      <CreateFormComponent
        rental={props.rental}
        action={action}
        deleteRental={props.deleteRental}
        updateRental={props.updateRental}
        onSubmit={props.onSubmit}
      />
    </div>
  );
}
