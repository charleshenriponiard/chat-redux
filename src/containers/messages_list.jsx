import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMessage } from '../actions';
// import { selectChannel } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';


class MessagesList extends Component {

  componentWillMount = () => {
    return this.props.selectMessages(this.props.selectChanel);
  }

  componentDidMount = () => {
    return setInterval(() => {
      return this.componentWillMount();
    }, 500);
  }

  componentWillUnmount = () => {
    return clearInterval;
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
