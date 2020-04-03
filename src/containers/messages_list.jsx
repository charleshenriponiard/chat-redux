import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMessage } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';


class MessagesList extends Component {

  componentDidMount() {
    return this.props.selectMessages('general');
  }

  render() {
    if (this.props.messages) {
      const { messages } = this.props;
      return (
        <div className="messages">
          { messages.map((el) => <Message message={el} key={el.content} /> )}
          <MessageForm />
        </div>
      );
    }
    return <h1>va te faire enculer</h1>;
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
    messages: state.messagesList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
