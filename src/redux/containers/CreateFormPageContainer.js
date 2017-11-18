// 4C
// 1) import the stuff
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// 2C) import the OrderPage we want to contain
import CreateFormPageLayout from '../../components/CreateFormPageLayout';
// import PageLayout from '../../components/PageLayout';

// 3C) import the Processes from the thunks
import getAllPrefsProcess from '../thunks/getAllPrefsProcess';
import createRentalProcess from '../thunks/createRentalProcess';
import deleteRentalProcess from '../thunks/deleteRentalProcess';
import updateRentalProcess from '../thunks/updateRentalProcess';

//import

// 4C) mapStateToProps function
function mapStateToProps(state, ownProps) {
  //console.log('CREATE_FORM_CONTAINER MAP_STATE_TO_PROPS');
  //console.log(state);

  // PARM
  // 1. get the rental from the state
  const { rentals } = state;
  // 2. get the id from the params
  const { rentalId } = ownProps.match.params;
  // 3. get the rental based on the rental id

  const rental = rentals.find(theRental => theRental.id === rentalId);
  // //console.log('rentals', rentals);
  // //console.log('rental', rental);

  return {
    rental,
    rentals: state.rentals,

    // Old Stuff
    items: state.items,
    item: state.item
    // old stuff
    // selectedMessageIds: state.selectedMessageIds,
    // selectedMessageCount: state.selectedMessageCount,
    // showComposeForm: state.showComposeForm,
    // messages: state.messages
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // 1 onMount default
    onMount: () => dispatch(getAllPrefsProcess()),

    // 2 Create rental
    onSubmit: rental => {
      let newRental = rental;
      return dispatch(createRentalProcess(newRental, true));
    },

    // 3 deleteRental
    deleteRental: rental => {
      let newRental = rental;
      //mc//console.log('DELETE CONTAINER ', rental);
      return dispatch(deleteRentalProcess(newRental, true));
    },

    // 4 updateRental
    updateRental: rental => {
      // passing in the updated rental object to the PROCESS
      let updatedRental = rental;
      return dispatch(updateRentalProcess(updatedRental, true));
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
// export default compose(connectToStore, onDidMount)(CreateFormPageLayout);
export default compose(connectToStore, onDidMount)(withRouter(CreateFormPageLayout));
