// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


const initialState = {
  messages: [],
  currentUser: window.prompt('Your user name please ?') || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  channelList: ['Bordeaux', 'Marseille', 'Paris'],
  channelSelected: 'Bordeaux'
};

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
