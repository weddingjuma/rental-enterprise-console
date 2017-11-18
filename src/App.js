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

import { isEmpty } from './utils/empUtil';
import decode from 'jwt-decode';

const history = createBrowserHistory();

// 4) Set up store
const userName = localStorage.getItem('userName');

function getInitialState(authentication) {
  return isEmpty(authentication)
    ? {
        // authenticatedUser: 0,
        userRole: 'guest_role',
        userName: 'guest_user'
      }
    : {
        // set up the state properies used for login
        // 1 token
        token: authentication.token,
        // 2 user
        authenticatedUser: authentication.user,
        // 3 login as agent
        userRole: 'agent',
        userName: userName
      };
}

const store = setupStore();
// 5 - 6) Remove Process and Components

export default class App extends Component {
  // 7) REMOVE constructor and state mgmt

  // 8) REMOVE InboxPage component
  //and replace with PROVIDER/CONTAINER
  // <div tag w <Provider w store w <InboxPageContainer
  //const { sub: user } = decode(authentication.token);

  render() {
   //mc//console.log('APP.js ', this.props.authentication);
    //console.log('APP JS DECODE ', decode(this.props.authentication.token));

    return (
      // 4C STUFF
      <div className="App">
        {/* <Provider store={store}> */}
        <Provider store={setupStore(getInitialState(this.props.authentication))}>
          <Router>
            <Switch>
              {/* 1. Search Main Page  */}
              <Route exact path="/" component={HomeComponent} />

              <Route
                exact
                path="/main" //
                history={history}
                component={PageContainer}
              />
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
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import decode from 'jwt-decode';
//
// // import './index.css';
//
// // 4C
// // 1 ) import { Provider } from 'react-redux';
//
// import { Provider } from 'react-redux';
//
// // 2) Add setUpStore
// import setupStore from './redux/setupStore';
//
// // 3) Add PageContainer
// import PageContainer from './redux/containers/PageContainer';
// import BusinessPageContainer from './redux/containers/BusinessPageContainer';
// import BusinessDetailPageContainer from './redux/containers/BusinessDetailPageContainer';
//
// import CreateFormPageContainer from './redux/containers/CreateFormPageContainer';
//
// // user   CreateUserContainer
// import CreateUserContainer from './redux/containers/CreateUserContainer';
//
// // login LoginUserContainer
// import LoginUserContainer from './redux/containers/LoginUserContainer';
//
// //
// import HomeComponent from './components/HomeComponent';
//
// import createBrowserHistory from 'history/createBrowserHistory';
//
// import { isEmpty } from './utils/empUtil';
//
// const history = createBrowserHistory();
//
// // 4) Set up store
//
// function getInitialState(authentication) {
// //mc//console.log('APP GET INIT STATE ', authentication, '.........................');
//   const { sub: user } = decode(authentication.token);
//
//   return isEmpty(authentication)
//     ? {}
//     : {
//         // set up the state properies used for login
//         // 1 token
//         token: authentication.token,
//         // 2 user
//         authenticatedUser: authentication.user.id,
//         // 3 login as agent
//         userRole: 'agent'
//       };
// }
//
// const store = setupStore();
// // 5 - 6) Remove Process and Components
//
// export default class App extends Component {
//   // 7) REMOVE constructor and state mgmt
//
//   // 8) REMOVE InboxPage component
//   //and replace with PROVIDER/CONTAINER
//   // <div tag w <Provider w store w <InboxPageContainer
//   //console.log('APP RENDER', props)
//   render() {
//     return (
//       // 4C STUFF
//       <div className="App">
//         {/* <Provider store={store}> */}
//         <Provider store={setupStore(getInitialState(this.props.authentication))}>
//           <Router>
//             <Switch>
//               {/* 1. Search Main Page  */}
//               <Route exact path="/" component={HomeComponent} />
//
//               <Route
//                 exact
//                 path="/main" //
//                 history={history}
//                 component={PageContainer}
//               />
//               {/* 2 Report Page BusinessPageContainer */}
//               <Route exact path="/report/" component={BusinessPageContainer} />
//               <Route exact path="/reports" component={BusinessPageContainer} />
//
//               <Route exact path="/admin/report" component={BusinessPageContainer} />
//               <Route exact path="/admin/reports" component={BusinessPageContainer} />
//
//               {/* 3 Report Page CreateFormPageContainer */}
//               <Route exact path="/admin/" history={history} component={CreateFormPageContainer} />
//
//               {/* 4 Report Page BusinessDetailsPageContainer */}
//               {/* <Route exact path="/reports/:rentalId" component={BusinessDetailPageContainer} /> */}
//               <Route
//                 exact
//                 path="/reports/:rentalId"
//                 render={props => <BusinessDetailPageContainer {...props} />}
//                 // component={BusinessDetailPageContainer}
//               />
//
//               {/* 5 <createFormPage with stuff  /> */}
//               <Route
//                 exact
//                 path="/admin/:rentalId"
//                 history={history}
//                 render={props => <CreateFormPageContainer {...props} />}
//                 // component={BusinessDetailPageContainer}
//               />
//
//               {/* 6 <CreateUser with stuff  /> */}
//               <Route
//                 exact
//                 path="/register" //
//                 history={history}
//                 render={props => <CreateUserContainer {...props} />}
//               />
//
//               {/* 7 <Login with stuff  /> */}
//               <Route
//                 exact
//                 path="/login" //
//                 history={history}
//                 render={props => <LoginUserContainer {...props} />}
//               />
//               {/* <PageLayout item={{}} items={this.state.items} onAddItem={this.onAddItem} /> */}
//             </Switch>
//           </Router>
//         </Provider>
//       </div>
//     );
//   }
//
//   onAddItem() {}
// } // end of App Component
