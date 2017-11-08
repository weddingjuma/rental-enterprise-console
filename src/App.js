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

// user   CreateUserContainer
import CreateUserContainer from './redux/containers/CreateUserContainer';

// login LoginUserContainer
import LoginUserContainer from './redux/containers/LoginUserContainer';

//
import HomeComponent from './components/HomeComponent';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

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
              <Route exact path="/admin/" history={history} component={CreateFormPageContainer} />

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
                history={history}
                render={props => <CreateFormPageContainer {...props} />}
                // component={BusinessDetailPageContainer}
              />

              {/* 6 <CreateUser with stuff  /> */}
              <Route
                exact
                path="/register" //
                history={history}
                render={props => <CreateUserContainer {...props} />}
              />

              {/* 7 <Login with stuff  /> */}
              <Route
                exact
                path="/login" //
                history={history}
                render={props => <LoginUserContainer {...props} />}
              />
              {/* <PageLayout item={{}} items={this.state.items} onAddItem={this.onAddItem} /> */}
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }

  onAddItem() {}
} // end of App Component
