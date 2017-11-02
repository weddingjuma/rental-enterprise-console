// 4C
// 1) import the stuff
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
// 2C) import the OrderPage we want to contain
// import Page from '../../components/Page';
// import BusinessComponent from '../../components/BusinessComponent';

import BusinessPageLayout from '../../components/BusinessPageLayout';
// import PageLayout from '../../components/PageLayout';

// 3C) import the Processes from the thunks
import getAllPrefsProcess from '../thunks/getAllPrefsProcess';

// 4C) mapStateToProps function
function mapStateToProps(state, ownProps) {
  console.log('BuSINESS_PAGECONTAINTER MAPTOSTATE');
  console.log(state);
  return {
    rentals: state.rentals,
    items: state.items,
    item: state.item,
    // old stuff
    selectedMessageIds: state.selectedMessageIds,
    selectedMessageCount: state.selectedMessageCount,
    showComposeForm: state.showComposeForm,
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getAllPrefsProcess())
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
export default compose(connectToStore, onDidMount)(BusinessPageLayout);
