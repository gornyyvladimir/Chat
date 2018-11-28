import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageForm from '../../molecules/MessageForm/MessageForm';
import MessageList from '../../molecules/MessageList/MessageList';
import styles from './Chat.module.css';
import { sendMessage, addMessage } from '../../../store/messages/actions';
import { setCurrentUser } from '../../../store/users/actions';

class Chat extends Component {
  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
      userId: window.location.pathname === '/client' ? 'client' : 'manager',
      tokenProvider: new TokenProvider({
        url: process.env.REACT_APP_TEST_TOKEN_PROVIDER,
      }),
    });

    chatManager.connect().then(currentUser => {
      this.props.onSetCurrentUser(currentUser);
      currentUser.subscribeToRoom({
        roomId: process.env.REACT_APP_ROOM_ID,
        hooks: {
          onMessage: message => {
            this.props.onAddMessage(message);
          },
        },
      });
    });
  }

  sendMessage = text => {
    this.props.currentUser.sendMessage({
      text,
      roomId: process.env.REACT_APP_ROOM_ID,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <MessageForm
          sendMessage={this.sendMessage}
        />
        <MessageList
          messages={this.props.messages}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages,
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = {
  onSendMessage: message => sendMessage(message),
  onAddMessage: message => addMessage(message),
  onSetCurrentUser: user => setCurrentUser(user),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
