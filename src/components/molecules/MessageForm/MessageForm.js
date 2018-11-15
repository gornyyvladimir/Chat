import React, { Component } from 'react';
import styles from './MessageForm.module.css';

class MessageForm extends Component {
  initialState = {
    message: '',
  };

  state = this.initialState;

  handleSubmit = (event = null) => {
    event && event.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState(this.initialState);
  };

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  handleKeyDown = event => {
    if (event.key === 'Enter' && event.ctrlKey) {
      this.handleSubmit();
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Чат</h1>
        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
          onKeyDown={event => {
            this.handleKeyDown(event, this.handleSubmit);
          }}
        >
          <textarea
            className={styles.textArea}
            type="text"
            placeholder="Сообщение"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button className={styles.submitButton} type="submit">
            Отправить
          </button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
