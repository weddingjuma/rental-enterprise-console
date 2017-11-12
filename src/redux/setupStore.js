import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

// only change for WTN
import wtnRootReducer from './reducers/wtnRootReducer';

//import rootReducer from './reducers/rootReducer';

import env from '../env';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware.withExtraArgument(env)));

export default function setupStore(initialState = {}) {
  return createStore(wtnRootReducer, initialState, enhancers);
}

// import { createStore } from 'redux';
// import rootReducer from './reducers/rootReducer';
//
// export default function setupStore() {
//   return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// }
