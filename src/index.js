import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import View from './View/View';
import { Provider } from 'react-redux';
import store from './Store/Store';
// import Autosuggest from './Autosuggest';

ReactDOM.render(
  <Provider store={store}>
    <View />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();