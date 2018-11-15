import React, { Component } from 'react';
import MessageForm from '../../molecules/MessageForm/MessageForm';
import MessageList from '../../molecules/MessageList/MessageList';
import styles from './Chat.module.css';
import currentUser from '../../../dummyUser';

class Chat extends Component {
  state = {
    messages: [],
  };

  sendMessage = (message, user) => {
    const messageObj = {
      id: this.state.messages.length + 1,
      sender: user,
      text: message,
      date: new Date(),
    };
    console.log(messageObj);
    this.setState({
      messages: [messageObj, ...this.state.messages],
    });
  };

  render() {
    return (
      <div>
        <MessageForm
          sendMessage={message => this.sendMessage(message, currentUser)}
        />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default Chat;
