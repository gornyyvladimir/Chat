import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './BankAccount.module.css';
import Toggle from '../../atoms/Toggle/Toggle';
import Card from '../../molecules/Card/Card';
import Operation from '../../molecules/Operation/Operation';
import {
  getOperations,
  resetOperations,
} from '../../../store/operations/actions';
import { getBanAccounts } from '../../../store/bankAccounts/actions';

class BankAccount extends Component {
  state = {
    maximizedAccount: null,
  };

  componentDidMount() {
    this.props.onGetBankAccounts();
  }

  handleMaximizeClick = accountNumber => {
    this.props.onGetOperations(accountNumber);
    this.setState({ maximizedAccount: accountNumber });
  };

  handleMinimizeClick = () => {
    this.props.onResetOperations();
    this.setState({ maximizedAccount: null });
  };

  handleSendOperationClick = (operation) => {
    this.props.currentUser.sendMessage({
      text: JSON.stringify({type: 'operation', message: operation}),
      roomId: process.env.REACT_APP_ROOM_ID,
    });
  }

  render() {
    const operations = !!this.props.operations.length && (
      <>
        <h3 className={styles.operationsTitle}>История операций</h3>
        <ul className={styles.list}>
          {this.props.operations.map(operation => (
            <li key={operation.id} className={styles.item}>
              <Operation
                date={operation.createdAt}
                operation={operation.operation}
                operationDiff={operation.operationDiff}
                currencyType={operation.currencyType}
              />
              <button className={styles.button} onClick={() => this.handleSendOperationClick(operation)}>Message button</button>
            </li>
          ))}
        </ul>
      </>
    );

    return (
      <div className={styles.wrapper}>
        <div className={styles.toggleWrapper}>
          <Toggle />
        </div>
        <div className={styles.cardWrapper}>
          {this.props.bankAccounts.map((bankAccount, index) => {
            const isOpened = this.state.maximizedAccount === bankAccount.id;

            return (
              <Card
                key={bankAccount.id}
                accountNumber={bankAccount.id}
                money={bankAccount.money}
                percent={bankAccount.percent}
                createdAt={bankAccount.createdAt}
                lastOperation={bankAccount.lastOperation}
                lastOperationDiff={bankAccount.lastOperationDiff}
                currencyType={bankAccount.currencyType}
                isOpened={isOpened}
                className={index%2 !== 0 ? styles.greyCard : null}
                onClick={
                  isOpened ? this.handleMinimizeClick : this.handleMaximizeClick
                }
              >
                {isOpened && operations}
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  operations: state.operations.operations,
  bankAccounts: state.bankAccounts.bankAccounts,
  currentUser: state.users.currentUser,
});

const mapDispatchToProps = {
  onGetBankAccounts: userId => getBanAccounts(userId),
  onGetOperations: bankAccount => getOperations(bankAccount),
  onResetOperations: () => resetOperations(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BankAccount);
