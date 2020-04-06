// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import reduxPromise from 'redux-promise';
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import messagesReducer from './reducers/messages_reducer';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import { applyMiddleware } from 'redux';

export const initialState = {
  messages: [],
  currentUser: window.prompt('Your user name please ?') || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  channels: ['bordeaux', 'marseille', 'paris', 'general', 'fanny'],
  selectChannel: 'general'
};
// State and reducers

const reducers = combineReducers(
  {
    channelsList: channelsReducer,
    selectChannel: selectedChannelReducer,
    user: currentUserReducer,
    messagesList: messagesReducer
});

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middlewares = applyMiddleware(reduxPromise);

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares) }>
    <App />
  </Provider>,
  document.getElementById('root')
);
