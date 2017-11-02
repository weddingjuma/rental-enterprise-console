// 4C
// 1) import the stuff
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
// 2C) import the OrderPage we want to contain
//import Page from '../../components/Page';
import BusinessDetailPageLayout from '../../components/BusinessDetailPageLayout';

//import BusinessPageLayout from '../../components/BusinessPageLayout';
// import PageLayout from '../../components/PageLayout';

// 3C) import the Processes from the thunks
import getAllPrefsProcess from '../thunks/getAllPrefsProcess';
import deleteRentalProcess from '../thunks/deleteRentalProcess';
import updateRentalProcess from '../thunks/updateRentalProcess';

import getByIdProcess from '../thunks/getByIdProcess';

// 4C) mapStateToProps function /////////////////////////////////////
function mapStateToProps(state, ownProps) {
  console.log('4A BUSINESSDETAILSCONTAINER mapStateToProps');
  console.log(state);

  // 1 get the rental
  const { rentals } = state;
  // 2 get the id from the parrams
  const { rentalId } = ownProps.match.params;
  console.log('OWNPROPS ', ownProps);
  // 3 get the rental based on the rental id

  //const rental = rentals[rentalId] || 'null';

  // use fine
  // const rental = rentals.find(theRental => {
  //   if (theRental.id === rentalId) return theRental;
  // });

  const rental = state.currentRental;
  //console.log('rentals', rentals);
  //console.log('rental', rental);

  return {
    rental,
    showForm2: state.showForm2
    // rentals: state.rentals,
    // items: state.items,
    // item: state.item,
    // // old stuff
    // selectedMessageIds: state.selectedMessageIds,
    // selectedMessageCount: state.selectedMessageCount,
    // showComposeForm: state.showComposeForm,
    // messages: state.messages
  };
}

/////////////////////////////////////
function mapDispatchToProps(dispatch, ownProps) {
  console.log('4B BUSINESSDETAILSCONTAINER MapDIspatchToProps');
  console.log(ownProps);

  return {
    /*
    for the BusinessDetails need
    1) Get all prefs (optional?)
    2) updateRental to update the record
    3) deleteRental to delete the record
    */
    onMount: () => dispatch(getByIdProcess(ownProps.match.params.rentalId)),
    // onMount: () => dispatch(getAllPrefsProcess()),

    onShowForm2: () => dispatch({ type: 'SHOW_FORM2', showForm2: true }),

    updateRental: rental => {
      // passing in the updated rental object to the PROCESS
      let updatedRental = rental;
      return dispatch(updateRentalProcess(updatedRental, true));
    },

    deleteRental: rental => {
      let newRental = rental;
      ////console.log('DELETE CONTAINER ', rental);
      return dispatch(deleteRentalProcess(newRental, true));
    },
    showRental: rental => {
      let newRental = rental;
      ////console.log('DELETE CONTAINER ', rental);
      return dispatch(getByIdProcess(newRental, true));
    }
  };
}
// 6) connectToStore
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// 7) onDidMount
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});
// 8) export compose
export default compose(connectToStore, onDidMount)(BusinessDetailPageLayout);
