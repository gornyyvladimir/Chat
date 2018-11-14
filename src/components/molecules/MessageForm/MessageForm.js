import React, { Component } from 'react';

class MessageForm extends Component {

  initialState = {
    message: '',
  }

  state = this.initialState;

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState(this.initialState);
  };

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Сообщение"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default MessageForm;
