// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import messagesReducer from './reducers/messages_reducer';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


const initialState = {
  messages: [],
  currentUser: window.prompt('Your user name please ?') || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  channels: ['Bordeaux', 'Marseille', 'Paris'],
  selectedChannel: 'Bordeaux'
};

// State and reducers
const reducers = combineReducers({
  channelsList: channelsReducer,
  selectChannel: selectedChannelReducer,
  user: currentUserReducer,
  messagesList: messagesReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
