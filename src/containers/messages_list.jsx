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

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.messages && prevProps.messages.length < this.props.messages.length && this.props.messages[ this.props.messages.length -1].author !== this.props.currentUser  ) {
      const x = document.getElementById("myAudio");
      x.play();
    }
  }

  render() {
    if (this.props.messages) {
      const { messages } = this.props;
      const styles = {
        borderBottom: "1px solid rgb(244, 244, 244)",
        paddingBottom: "30px",
        color: "rgb(70, 70, 90)"
      }
      return (
        <div className="messages-list">
          <audio id="myAudio">
            <source src="insight.mp3" type="audio/mpeg"/>
          </audio>
          <h2 style={styles}>Channel: #{this.props.selectChanel ? this.props.selectChanel.toUpperCase() : "UNDEFINED"}</h2>
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
    selectChanel: state.selectChannel,
    currentUser: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
