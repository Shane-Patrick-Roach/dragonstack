import React from 'react';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import './index.css';
import { createStore } from 'redux';


const DEFAULT_GENERATION = { generationId: '', expiration: ' ' };
const generationReducer = (state, action) => {

  console.log('generationReducer', state);

  if (action.type === 'GENERATION_ACTION_TYPE') {
    return { generation: action.generation }
  }

  return {
    generation: DEFAULT_GENERATION
  }
}

const store = createStore(generationReducer);

store.dispatch({
  type: 'GENERATION_ACTION_TYPE',
  generation: { generationId: 'goo', expiration: 'hello' }
});



console.log('store.getState()', store.getState())

render(
  <div>
    <h2>Dragon Stack</h2>
    <Generation />
    <Dragon />
  </div>,
  document.getElementById('root')
);
