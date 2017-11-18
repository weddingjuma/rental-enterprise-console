import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import checkAuth from './utils/checkAuth';
import env from './env';
//import setupStore from './redux/setupStore';
//console.log('INDEX .......................................... ');

//const store = setupStore();
async function render() {
  // //mc//console.log('INDEX 2 ................');
  const authentication = await checkAuth({
    baseUrl: env.API_BASE_URL
  });
  //console.log('INDEX AUTH', authentication);
  ReactDOM.render(<App authentication={authentication} />, document.getElementById('root'));
}

render();
// comment out once auth is done
//ReactDOM.render(<App />, document.getElementById('root'));
