import React from 'react';

import PageLayout from './PageLayout';

export default function Page(props) {
  //
//mc//console.log('PAGE COMPONENT');
  //console.log('RENTALS: ', props.rentals);
//mc//console.log(props);

  //mc//console.log('IndexPage SELECTED: ' + props.selectedMessageIds);
  return (
    <PageLayout
      // PASS state stuff
      onShowForm={props.onShowForm}
      showForm={props.showForm}
      // user login form
      onShowLoginForm={props.onShowLoginForm}
      showLoginForm={props.showLoginForm}
      loginUser={props.loginUser}
      logoutUser={props.logoutUser}
      loginError={props.loginError}
      // User creation form
      onShowUserForm={props.onShowUserForm}
      showUserForm={props.showUserForm}
      createUser={props.createUser}
      // user Variables
      authenticatedUser={props.authenticatedUser}
      userRole={props.userRole}
      userName={props.userName}
      // other
      history={props.history}
      onSubmit={props.onSubmit}
      deleteRental={props.deleteRental}
      updateRental={props.updateRental}
      rentals={props.rentals}
      item={props.item}
      items={props.items}
      search={props.search}
      setSearch={props.setSearch}
      setSearchSort={props.setSearchSort}
      setSearchWord={props.setSearchWord}
      getPrefs={props.getPrefs}
    />
  );
}
