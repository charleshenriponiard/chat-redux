import React, { Component } from 'react';

class Message extends Component {
  render() {
    return ( 
      <div>
        <h3>{this.props.message.author}</h3>
        <p>{this.props.message.content}</p>
      </div>
       
    );
  }
};

export default Message;
