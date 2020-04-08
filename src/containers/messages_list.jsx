import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectMessage } from '../actions';
// import { selectChannel } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';


class MessagesList extends Component {

  componentWillMount = () => {
    return this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 500);
  }

  // componentDidMount = () => {
  //   return setInterval(() => {
  //     return this.componentWillMount();
  //   }, 500);
  // }

  componentDidUpdate = (prevProps) => {
    this.list.scrollTop = this.list.scrollHeight;
    if (prevProps.messages && prevProps.messages.length < this.props.messages.length && this.props.messages[ this.props.messages.length -1].author !== this.props.currentUser  ) {
      const x = document.getElementById("myAudio");
      x.play();
    }
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.channelFromParams);
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
            <source src="../../assets/images/insight.mp3" type="audio/mpeg"/>
          </audio>
          <h2 style={styles}>Channel: #{this.props.channelFromParams ? this.props.channelFromParams.toUpperCase() : "UNDEFINED"}</h2>
          <div className="messages" ref={(list) => { this.list = list; }}>
            { messages.map(el => <Message message={el} key={el.content + Math.random(10000)} ref={this.scroll} />) }
          </div>
          <MessageForm channelFromParams={this.props.channelFromParams} />
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchMessages: selectMessage },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messagesList,
    currentUser: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
