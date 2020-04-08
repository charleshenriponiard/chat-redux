import React from 'react';
import Menu from './menu';
import ChannelsList from '../containers/channels_list';
import MessagesList from '../containers/messages_list';


const App = (props) => {
  console.log(props);
  return (
    <div className="display-flex">
      <Menu />
      <ChannelsList channelFromParams={props.match.params.channel} />
      <MessagesList channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
