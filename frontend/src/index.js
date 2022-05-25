import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import thunk from 'redux-thunk';


import './index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { generationActionCreator } from './actions/generation';



const store = createStore(
  rootReducer, /* preloadedState, */
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);


render(
  <Provider store={store}>
    <div>
      <h2>Dragon Stack</h2>
      <Generation />
      <Dragon />
    </div>
  </Provider>,
  document.getElementById('root')
);
