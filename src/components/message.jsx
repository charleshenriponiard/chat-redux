import React, { Component } from 'react';

class Message extends Component {

  hashCode = (str) => { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

intToRGB = (i) => {
    let c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
}

  render() {
    return ( 
      <div>
        <h3 style={{ color: `#${this.intToRGB(this.hashCode(this.props.message.author))}`}} >{this.props.message.author}</h3>
        <p>{this.props.message.content}</p>
      </div>
       
    );
  }
};

export default Message;
