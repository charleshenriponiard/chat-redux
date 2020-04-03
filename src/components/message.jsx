import React, { Component } from 'react';

class Message extends Component {
  render() {
    return ( 
      <div>
        <p>{this.props.message.author}</p>
        <p>{this.props.message.content}</p>
      </div>
       
    );
  }
};

export default Message;
