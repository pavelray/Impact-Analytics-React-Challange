import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import {Provider} from 'react-redux';

import store from './stores/store';
import reportWebVitals from "./reportWebVitals";


render(
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
