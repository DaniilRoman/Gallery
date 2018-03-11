import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage'


const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
  <WebPage/>
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