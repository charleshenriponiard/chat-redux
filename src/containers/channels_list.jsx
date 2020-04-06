import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel } from '../actions';

class ChannelsList extends Component {
  handleClass = (channel) => {
    const classes = "channel";
    if (this.props.selectChanel === channel) {
      const newClasses = `${classes} selected`;
      return newClasses;
    }
    return classes;
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  render() {
    return (
      <div className="channels">
        <p className="headers">Channel list :</p>
        {this.props.channels.map((channel) => <h2 onClick={() => this.handleClick(channel)}  className={ this.handleClass(channel) } key={channel + Math.random(100000)}>{channel}</h2> )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channelsList,
    selectChanel: state.selectChannel
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectChannel: selectChannel },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);

