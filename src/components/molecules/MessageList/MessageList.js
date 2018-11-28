import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../../atoms/Message/Message';
import styles from '../MessageList/MessageList.module.css';

class MessageList extends Component {
  state = {
    isScrolled: false,
  };

  handleScroll = event => {
    if (event.target.scrollTop > 0) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };

  render() {
    const { messages, currentUser } = this.props;
    console.log(this.state.isScrolled);
    return (
      <div className={styles.wrapper}>
        <ul className={styles.messageList}>
          {messages.map(message => (
            <li key={message.id}>
              <Message
                isCurrentUserMessage={currentUser.id === message.senderId}
                message={message}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps)(MessageList);
