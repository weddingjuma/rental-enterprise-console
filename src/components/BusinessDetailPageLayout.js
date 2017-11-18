import React from 'react';

import HeaderComponent from './HeaderComponent';
// import SearchFormComponent from './SearchFormComponent';
import CreateFormComponent from './CreateFormComponent';
// import BusinessComponent from './BusinessComponent';
import BusinessItemDetailComponent from './BusinessItemDetailComponent';

// import UserPrefComponent from './UserPrefComponent';

//export default function BusinessDetailPageLayout(props) {
export default function BusinessDetailPageLayout({
  rental = {},
  showForm2,
  onShowForm2,
  updateRental,
  deleteRental,
  showRental,
  authenticatedUser,
  userRole,
  history,
  userName
}) {
  //

  //mc//console.log('BUSINESS DETAIL LAYOUT.....................');
  //console.log(props);
  //mc//console.log(rental);
  //mc//console.log(showForm2);

  //console.log(onShowForm2);
  //console.log(updateRental);
  //console.log(deleteRental);
  let title = 'Details Report';
  // let mockRental = {
  //   address: 'THIS IS MOCK DATA WILL GET LIVE DATA SOON!',
  //   price: '0'
  // };
  return (
    <div className="PageLayout">
      <HeaderComponent title={title} authenticatedUser={authenticatedUser} userRole={userRole} userName={userName} />
      {/* <CreateFormComponent rentals={props.rentals} item={{}} /> */}

      <BusinessItemDetailComponent
        rental={rental}
        showForm2={showForm2}
        onShowForm2={onShowForm2}
        updateRental={updateRental}
        deleteRental={deleteRental}
        authenticatedUser={authenticatedUser}
        userRole={userRole}
        userName={userName}
      />
      {/* show create if showForm2 is true /> */}
      {showForm2 &&
        <CreateFormComponent
          rental={rental}
          action="update"
          //  onSubmit={props.onSubmit}
          deleteRental={deleteRental}
          updateRental={updateRental}
          authenticatedUser={authenticatedUser}
          userRole={userRole}
          history={history}
          userName={userName}
          // onCancel={props.onCancel}
        />}
    </div>
  );
}
