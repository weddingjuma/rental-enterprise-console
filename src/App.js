import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './index.css';

// 4C
// 1 ) import { Provider } from 'react-redux';

import { Provider } from 'react-redux';

// 2) Add setUpStore
import setupStore from './redux/setupStore';

// 3) Add PageContainer
import PageContainer from './redux/containers/PageContainer';
import BusinessPageContainer from './redux/containers/BusinessPageContainer';
import BusinessDetailPageContainer from './redux/containers/BusinessDetailPageContainer';

import CreateFormPageContainer from './redux/containers/CreateFormPageContainer';
import HomeComponent from './components/HomeComponent';

// import PageLayout from './components/PageLayout';
//
// import BusinessComponent from './components/BusinessComponent';
// import SearchFormComponent from './components/SearchFormComponent';
//
// import UserPrefComponent from './components/UserPrefComponent';

// 4) Set up store
const store = setupStore();
// 5 - 6) Remove Process and Components

export default class App extends Component {
  // 7) REMOVE constructor and state mgmt

  // 8) REMOVE InboxPage component
  //and replace with PROVIDER/CONTAINER
  // <div tag w <Provider w store w <InboxPageContainer

  render() {
    return (
      // 4C STUFF
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              {/* 1. Search Main Page  */}
              <Route exact path="/" component={HomeComponent} />

              <Route exact path="/main" component={PageContainer} />
              {/* 2 Report Page BusinessPageContainer */}
              <Route exact path="/report/" component={BusinessPageContainer} />
              <Route exact path="/reports" component={BusinessPageContainer} />

              <Route exact path="/admin/report" component={BusinessPageContainer} />
              <Route exact path="/admin/reports" component={BusinessPageContainer} />

              {/* 3 Report Page CreateFormPageContainer */}
              <Route exact path="/admin/" component={CreateFormPageContainer} />

              {/* 4 Report Page BusinessDetailsPageContainer */}
              {/* <Route exact path="/reports/:rentalId" component={BusinessDetailPageContainer} /> */}
              <Route
                exact
                path="/reports/:rentalId"
                render={props => <BusinessDetailPageContainer {...props} />}
                // component={BusinessDetailPageContainer}
              />

              {/* 5 <createFormPage with stuff  /> */}
              <Route
                exact
                path="/admin/:rentalId"
                render={props => <CreateFormPageContainer {...props} />}
                // component={BusinessDetailPageContainer}
              />

              {/* <PageLayout item={{}} items={this.state.items} onAddItem={this.onAddItem} /> */}
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
  // render() {
  //   return (
  //     <InboxPage
  //       messages={this.state.messages} //
  //       selectedMessageIds={this.state.selectedMessageIds} //
  //       selectedMessageCount={this.state.selectedMessageCount}
  //       showComposeForm={this.state.showComposeForm} //
  //       // MESSAGES METHODS
  //       onSelectMessage={this._onSelectMessage}
  //       onDeselectMessage={this._onDeselectMessage}
  //       onStarMessage={this._onStarMessage}
  //       onUnstarMessage={this._onUnstarMessage}
  //       onMarkAsReadMessage={this._onMarkAsReadMessage}
  //       //
  //       // TOOLBAR METHODS
  //       //checkItem={this._checkItem} //?
  //       onOpenComposeForm={this._onOpenComposeForm} // DOne
  //       onSelectAllMessages={this._onSelectAllMessages} // Done
  //       onDeselectAllMessages={this._onDeselectAllMessages} //Done
  //       onMarkAsReadSelectedMessages={this._onMarkAsReadSelectedMessages} // Done
  //       onMarkAsUnreadSelectedMessages={this._onMarkAsUnreadSelectedMessages} // Done
  //       onApplyLabelSelectedMessages={this._onApplyLabelSelectedMessages} // DONE
  //       onRemoveLabelSelectedMessages={this._onRemoveLabelSelectedMessages} // DONE
  //       onDeleteSelectedMessages={this._onDeleteSelectedMessages} // DONE
  //       // COMPOSE EMAIL
  //       onSubmit={this._onSubmit}
  //       onCancel={this._onCancel}
  //     />
  //   );
  // } // end of render

  //
  //

  // 9) Remove all methods
  //// MESSAGES FUNCTIONS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/////////////////

  /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // 1D load the messages after 'componentDidMount()' >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // componentDidMount() {
  //   this.props.store.dispatch(getMessagesProcess());
  // }
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 2D _onSelectMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onSelectMessage = itemId => {
  //   // //console.log('_onSelectMessage');
  //   this.props.store.dispatch({ type: 'SELECT_MESSAGE', itemId });
  //   // //console.log(this.state.selectedMessageIds);
  // };
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 3D _onDeselectMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onDeselectMessage = itemId => {
  //   ////console.log('onDeselectMessage');
  //   this.props.store.dispatch({ type: 'DESELECT_MESSAGE', itemId });
  // };
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 4D _onStarMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onStarMessage = itemId => {
  //   this.props.store.dispatch(updateMessageProcess(itemId, 'star'));
  // };
  // /// DONE! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 5D _onUnstarMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onUnstarMessage = itemId => {
  //   // 1. call updateMessage
  //   this.props.store.dispatch(updateMessageProcess(itemId, 'unstar'));
  // };
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 6D _onMarkAsReadMessage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onMarkAsReadMessage = itemId => {
  //   //  //console.log('READ');
  //   // 1. call updateMessage
  //   this.props.store.dispatch(updateMessageProcess(itemId, 'read'));
  // };
  //
  // _onMarkAsUnReadMessage = itemId => {
  //   //  //console.log('READ');
  //   // 1. call updateMessage
  //   this.props.store.dispatch(updateMessageProcess(itemId, 'unread'));
  // };
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // TOOLBAR FUNCTIONS /////
  // // 7D _onOpenComposeForm >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onOpenComposeForm = () => {
  //   // //console.log('onOpenComposeForm');
  //   //
  //   // //console.log(this.state.showComposeForm);
  //   this.props.store.dispatch({ type: 'COMPOSE', showComposeForm: true });
  //
  //   //Ask why this is false after setting true. works fine though ?????????????
  //   //console.log(this.state.showComposeForm);
  // };
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 8D _onSelectAllMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onSelectAllMessages = () => {
  //   ////console.log('_onSelectAllMessages');
  //   this.props.store.dispatch({ type: 'SELECT_ALL_MESSAGES' });
  // };
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 9D _onDeselectAllMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onDeselectAllMessages = () => {
  //   ////console.log('_onDeselectAllMessages');
  //   this.props.store.dispatch({ type: 'DESELECT_ALL_MESSAGES' });
  // };
  //
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 10D _onMarkAsReadSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onMarkAsReadSelectedMessages = () => {
  //   ////console.log('_onMarkAsReadSelectedMessages');
  //   this.state.selectedMessagesIds.forEach(itemId => {
  //     this._onMarkAsReadMessage(itemId);
  //   });
  // };
  //
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 11D _onMarkAsUnreadSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onMarkAsUnreadSelectedMessages = () => {
  //   //  //console.log('_onMarkAsUnreadSelectedMessagesi');
  //   ////console.log(this.state.messages);
  //   this.state.selectedMessagesIds.forEach(itemId => {
  //     this._onMarkAsUnReadMessage(itemId);
  //   });
  // };
  //
  // // 12D _onApplyLabelSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onApplyLabelSelectedMessages = label => {
  //   //console.log(this.state.selectedMessagesIds);
  //   // this.state.selectedMessagesIds.forEach(itemId => {
  //   //   this.props.store.dispatch(updateMessageProcess(itemId, label));
  //   // });
  //
  //   this.state.messages.forEach(message => {
  //     // get the msgId
  //     let itemId = message.id;
  //     // get the msgLabel
  //     let labels = message.labels;
  //
  //     // if label don't include it, add to the label
  //     if (!labels.includes(label)) {
  //       labels.push(label);
  //     }
  //     this.props.store.dispatch(updateMessageProcess(itemId, 'addLabel', labels));
  //   });
  // };
  //
  // // 13D _onRemoveLabelSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onRemoveLabelSelectedMessages = label => {
  //   ////console.log('onRemoveLabelSelectedMessages');
  //
  //   this.state.messages.forEach(message => {
  //     // get the msgId
  //     let itemId = message.id;
  //     // get the msgLabel
  //     let labels = message.labels;
  //
  //     // if label don't include it, add to the label
  //     if (labels.includes(label)) {
  //       labels.splice(labels.indexOf(label), 1);
  //     }
  //     this.props.store.dispatch(updateMessageProcess(itemId, 'removeLabel', labels));
  //   });
  // };
  //
  // // DONE ////////////
  // // 14D _onDeleteSelectedMessages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onDeleteSelectedMessages = () => {
  //   ////console.log('_onDeleteSelectedMessages');
  //   this.state.selectedMessageIds.forEach(itemId => {
  //     ////console.log(message.id);
  //     //  let itemId = message.id;
  //     ////console.log('item id: ' + itemId);
  //     this.props.store.dispatch(deleteMessageProcess(itemId));
  //   }); // end of forEach
  // };
  // // DONE /////////////////////////
  // // 15 _onSubmit >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onSubmit = ({ subject, body }) => {
  //   ////console.log('onSubmit 1');
  //
  //   // 1 set the object
  //   // 2 pass it to createMessage()
  //   // 3 setState
  //   let newMessage = {
  //     subject: subject,
  //     body: body,
  //     read: false,
  //     starred: false,
  //     labels: ''
  //   };
  //
  //   this.props.store.dispatch(createMessageProcess(newMessage, false));
  // };
  //
  // /// DONE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //
  // // 16D _onCancel >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _onCancel = () => {
  //   ////console.log('onCancel ');
  //   this.props.store.dispatch({ type: 'COMPOSE', showComposeForm: false });
  //
  //   //   this.setState({
  //   //     showComposeForm: false
  //   //   });
  //   //   //console.log(this.state.showComposeForm);
  // };
  //
  // // // 17 _checkItem >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // _checkItem(itemId, type) {
  //   //console.log('type: ' + type);
  // }
  // /////////

  onAddItem() {}
} // end of App Component
