import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = { input: ""};
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleClick= (e) => {
    this.props.createMessage('general', this.state.input, 'charles')
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.input}/>
        <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Envoyer</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}


export default connect(null, mapDispatchToProps)(MessageForm);
