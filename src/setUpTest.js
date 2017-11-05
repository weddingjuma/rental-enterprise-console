/*
https://www.npmjs.com/package/jest-fetch-mock

Fetch is the new way to do HTTP requests in the browser, and it can be used in
other environments such as React Native. Jest Fetch Mock allows you to easily mock your fetch calls and return the response you need to fake the HTTP requests.

*/
import fetchMock from 'jest-fetch-mock';
global.fetch = fetchMock;
