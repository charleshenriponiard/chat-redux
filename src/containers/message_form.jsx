import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      return this.handleClick();
    } 
  }

  handleClick = () => {
    this.props.createMessage(this.props.selectChanel, this.state.input, this.props.currentUser);
    this.setState({ input: "" });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className="form-group form-inline" style={{ paddingTop: 30 }}>
        <div className="row">
          <div className="col-sm-10">
            <input ref={(input) => { this.messageBox = input; }} onKeyDown={this.onKeyDownHandler} type="text" className="form-control form-control-lg" style={{ width: "100%" }} placeholder="Your message" onChange={this.handleChange} value={this.state.input} />
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }} onClick={this.handleClick}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user,
    selectChanel: state.selectChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
