import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import App from './components/App';
import { logger, crashReporter } from './reducers/logging';
import { BrowserRouter, Route } from 'react-router-dom'


const store = createStore(allReducers, applyMiddleware(logger, crashReporter));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);