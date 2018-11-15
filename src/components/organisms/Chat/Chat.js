import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageForm from '../../molecules/MessageForm/MessageForm';
import MessageList from '../../molecules/MessageList/MessageList';
import styles from './Chat.module.css';
import currentUser from '../../../dummyUser';
import { sendMessage } from '../../../store/messages/actions';

class Chat extends Component {
  sendMessage = (message, user) => {
    const messageObj = {
      id: this.props.messages.length + 1,
      sender: user,
      text: message,
      date: new Date(),
    };
    this.props.onSendMessage(messageObj);
  };

  render() {
    return (
      <div>
        <MessageForm
          sendMessage={message => this.sendMessage(message, currentUser)}
        />
        <MessageList messages={this.props.messages} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages,
});

const mapDispatchToProps = {
  onSendMessage: message => sendMessage(message),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
