import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Message from '../../atoms/Message/Message';
import styles from '../MessageList/MessageList.module.css';
import DateDivider from '../../atoms/DateDivider/DateDivider';

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
    return (
      <div className={styles.wrapper}>
        <ul className={styles.messageList}>
          {messages.map((message, index) => {
            const prevDate = messages[index + 1] ? messages[index + 1].createdAt : moment();
            const isAfter = moment(message.createdAt).isAfter(prevDate, 'day');
            return (
              <li key={message.id}>
                <Message
                  isCurrentUserMessage={currentUser.id === message.senderId}
                  message={message}
                />
                {isAfter && <DateDivider date={moment(prevDate).format("DD.MM.YYYY")} />}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps)(MessageList);
