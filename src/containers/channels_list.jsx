import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMessage } from '../actions';

class ChannelsList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  handleClass = (channel) => {
    const classes = "channel";
    if (this.props.channelFromParams === channel) {
      const newClasses = `${classes} selected`;
      return newClasses;
    }
    return classes;
  }

  render() {
    const styles = {
      marginBottom: 30,
      color: "rgb(70, 70, 90)"
    };

    return (
      <div className="channels">
        <h3 style={styles} className="headers">Channel list :</h3>
        {this.props.channels.map((channel) => <p className={ this.handleClass(channel) } key={channel + Math.random(100000)}><Link to={`/${channel}`}>#{channel.toUpperCase()}</Link></p> )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channelsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchMessages: selectMessage },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);

