import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';
//import Root from './components/Root';
import { logger, crashReporter } from './reducers/logging';
//import { BrowserRouter } from 'react-router-dom';


//import { BrowserRouter, Route } from 'react-router';


const store = createStore(allReducers, applyMiddleware(logger, crashReporter));

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter>
      <WebPage/>
    </BrowserRouter> */}
    <WebPage />
  </Provider>,
  document.getElementById('app')
);

// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from './reducers'
// import App from './components/App'
//  
// let store = createStore(todoApp)
//  
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// )