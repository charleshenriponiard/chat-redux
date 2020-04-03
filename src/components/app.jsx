import React from 'react';
import Menu from './menu';
import ChannelsList from '../containers/channels_list';
import MessagesList from '../containers/messages_list';


const App = () => {
  return (
    <div className="display-flex">
      <Menu />
      <ChannelsList />
      <MessagesList />
    </div>
  );
};

export default App;
