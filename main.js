import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers.jsx'
import App from './App.jsx'

let store = createStore(reducers);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
