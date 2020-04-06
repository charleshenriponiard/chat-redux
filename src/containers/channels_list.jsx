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
    const styles = {
      marginBottom: 30,
      color: "rgb(70, 70, 90)"
    }
    return (
      <div className="channels">
        <h3 style={styles} className="headers">Channel list :</h3>
        {this.props.channels.map((channel) => <p onClick={() => this.handleClick(channel)}  className={ this.handleClass(channel) } key={channel + Math.random(100000)}>#{channel.toUpperCase()}</p> )}
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

