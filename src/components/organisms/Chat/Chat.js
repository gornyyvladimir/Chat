import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageForm from '../../molecules/MessageForm/MessageForm';
import MessageList from '../../molecules/MessageList/MessageList';
import styles from './Chat.module.css';
import { sendMessage, addMessage } from '../../../store/messages/actions';

class Chat extends Component {
  componentDidMount() {
    console.log(window.location);
    const chatManager = new ChatManager({
      instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
      userId:
        window.location.pathname === '/client' ? 'client' : 'manager',
      tokenProvider: new TokenProvider({
        url: process.env.REACT_APP_TEST_TOKEN_PROVIDER,
      }),
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      console.log(currentUser);
      currentUser.subscribeToRoom({
        roomId: '19376071',
        hooks: {
          onMessage: message => {
            this.props.onAddMessage(message);
          },
        },
      });
    });
  }

  sendMessage = text => {
    this.currentUser.sendMessage({
      text,
      roomId: '19376071',
    });
  };

  render() {
    return (
      <div>
        <MessageForm sendMessage={this.sendMessage} />
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
  onAddMessage: message => addMessage(message),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
