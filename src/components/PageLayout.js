import React from 'react';

import HeaderComponent from './HeaderComponent';
import SearchFormComponent from './SearchFormComponent';
import CreateFormComponent from './CreateFormComponent';
import BusinessComponent from './BusinessComponent';

import CreateUserComponent from './CreateUserComponent';
import LoginUserComponent from './LoginUserComponent';

// import UserPrefComponent from './UserPrefComponent';

export default function PageLayout(props) {
  //
  console.log('PAGE LAYOUT COMP');
  console.log(props.logoutUser);
  // console.log(props.showLoginForm);
  // console.log(props.rentals);
  // //console.log(props.items);
  //console.log('SHOWFORM?', props);
  ///  let title = 'add';
  let action = 'add';

  if (props.rental) {
    ///  title = 'Update ' + props.rental.address;
    action = 'update';
  }

  return (
    <div className="PageLayout">
      <HeaderComponent
        onShowForm={props.onShowForm}
        title={'Search & Report'}
        //
        authenticatedUser={props.authenticatedUser}
        userRole={props.userRole}
      />
      {/* TEST DATA {props.showUserForm} and LOGIN {props.showLoginForm}
      authenticatedUser={props.authenticatedUser} userRole={props.userRole} */}
      {/* <CreateFormComponent rentals={props.rentals} item={{}} /> */}
      {props.showForm &&
        <CreateFormComponent
          action={action}
          onSubmit={props.onSubmit}
          deleteRental={props.deleteRental}
          updateRental={props.updateRental}
          onCancel={props.onCancel}
          authenticatedUser={props.authenticatedUser}
          userRole={props.userRole}
          history={props.history}
        />}
      {props.showLoginForm &&
        <LoginUserComponent
          loginUser={props.loginUser}
          // for cancel
          onCancel={props.onCancel}
          history={props.history}
        />}
      {props.showUserForm &&
        <CreateUserComponent
          createUser={props.createUser}
          // action={action}
          // onSubmit={props.onSubmit}
          // deleteRental={props.deleteRental}
          // updateRental={props.updateRental}
          onCancel={props.onCancel}
          authenticatedUser={props.authenticatedUser}
          userRole={props.userRole}
          history={props.history}
        />}
      <SearchFormComponent
        setSearch={props.setSearch} //
        setSearchSort={props.setSearchSort}
        setSearchWord={props.setSearchWord}
        onShowForm={props.onShowForm} //
        onShowLoginForm={props.onShowLoginForm}
        onShowUserForm={props.onShowUserForm}
        rentals={props.rentals}
        item={{}}
        search={props.search}
        getPrefs={props.getPrefs}
        authenticatedUser={props.authenticatedUser}
        userRole={props.userRole}
        logoutUser={props.logoutUser}
        history={props.history}
      />
      <BusinessComponent
        search={props.search}
        rentals={props.rentals} //
        items={props.items}
        onAddItem={props.onAddItem}
        authenticatedUser={props.authenticatedUser}
        userRole={props.userRole}
        history={props.history}
      />
      {/* <UserPrefComponent item={{}} /> */}
    </div>
  );
}
