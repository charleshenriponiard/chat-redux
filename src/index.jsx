// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import logger from 'redux-logger';

import reduxPromise from 'redux-promise';
import channelsReducer from './reducers/channels_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import messagesReducer from './reducers/messages_reducer';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

const initialState = {
  messagesList: [],
  user: window.prompt('Your user name please ?') || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  channelsList: ['bordeaux', 'marseille', 'paris', 'general', 'friends']
};

const reducers = combineReducers(
  {
    channelsList: channelsReducer,
    user: currentUserReducer,
    messagesList: messagesReducer
  });


const middlewares = applyMiddleware(reduxPromise, logger);

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
