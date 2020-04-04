import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChannelsList extends Component {


  render() {
    console.log(this.props.selectChanel, 'selectChanel');
    console.log(this.props.channels, 'channels');

    let classes = "";
    if (this.props.selectChanel === this.props.channels) {
      return classes += "selected"
    }
    return (
      <div className="channels">
        {this.props.channels.map((channel) => <h1 className={ classes } key={channel + Math.random(100000)}>{channel}</h1> )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    channels: state.channelsList,
    selectChanel: state.selectChannel
  };
};

export default connect(mapStateToProps)(ChannelsList);

