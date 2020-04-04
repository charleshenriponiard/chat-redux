import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMessage, selectChannel } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';


class MessagesList extends Component {

  componentWillMount() {
    this.props.selectMessages(this.props.selectChannel);
    // return setInterval(() => {
    //   this.props.selectMessages(this.props.selectChannel)}, 500);
  }

  componentWillUnmount() {
    clearInterval
  }

  render() {
    if (this.props.messages) {
      const { messages } = this.props;
      return (
        <div className="messages-list">
          <div className="messages">
            { messages.map(el => <Message message={el} key={el.content + Math.random(10000)} />) }
          </div>
          <MessageForm />
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectMessages: selectMessage },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messagesList,
    selectChanel: state.selectChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
