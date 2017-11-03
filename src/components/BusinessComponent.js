import React from 'react';
import BusinessItemComponent from './BusinessItemComponent';

import './BusinessComponent.story.css';

// export default function BusinessComponent({ rentals, items, onAddItem,  }) {
export default function BusinessComponent(props) {
  // function handleEvent(event) {
  //   event.preventDefault();
  //   props.onShowForm();
  // }

  console.log('BUSINESSCOMPONENT');
  console.log(props.authenticatedUser);
  //let title = 'Propertie$';
  if (props.rentals && Array.isArray(props.rentals)) {
    // //console.log('hiya');
    // //console.log(rentals);

    return (
      <div className="menuItems BusinessComponent">
        {/* authenticatedUser={props.authenticatedUser} userRole={props.userRole} */}
        {props.rentals.map((
          rental //
        ) => {
          // //console.log('looping.........................');
          // //console.log(props.search);
          return (
            <BusinessItemComponent
              key={rental.id}
              //key={userpref.id} //
              rental={rental}
              item={props.item} //
              onAddItem={props.onAddItem}
              onShowForm={props.onShowForm}
              authenticatedUser={props.authenticatedUser}
              userRole={props.userRole}
            />
          );
        })}
      </div>
    );
  } else {
    return <div>Loading...the stuff</div>;
  }
}
