import React from 'react';

import PageLayout from './PageLayout';

export default function Page(props) {
  //
  //console.log('PAGE');
  // //console.log(props.rentals);
  //console.log(props);

  ////console.log('IndexPage SELECTED: ' + props.selectedMessageIds);
  return (
    <PageLayout
      // PASS state stuff
      onShowForm={props.onShowForm}
      onSubmit={props.onSubmit}
      deleteRental={props.deleteRental}
      updateRental={props.updateRental}
      showForm={props.showForm}
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
