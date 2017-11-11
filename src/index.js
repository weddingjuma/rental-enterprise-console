import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import checkAuth from './utils/checkAuth';
import env from './env';
//import setupStore from './redux/setupStore';

//const store = setupStore();
async function render() {
  console.log('L1 ');
  const authentication = await checkAuth({
    baseUrl: env.API_BASE_URL
  });
  console.log('L2');
  ReactDOM.render(<App authentication={authentication} />, document.getElementById('root'));
}

ReactDOM.render(<App />, document.getElementById('root'));
