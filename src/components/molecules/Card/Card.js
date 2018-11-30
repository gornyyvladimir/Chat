import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './Card.module.css';
import ColoredMoney from '../../atoms/ColoredMoney/ColoredMoney';
import MoneyFormatter from '../../atoms/MoneyFormatter/MoneyFormatter';
import Operation from '../../molecules/Operation/Operation';
import {
  getOperations,
  resetOperations,
} from '../../../store/operations/actions';

class Card extends Component {
  handleMaximizeClick = () => {
    this.props.onGetOperations();
  };

  render() {
    const {
      className,
      accountNumber,
      money,
      percent,
      createdAt,
      lastOperation,
      lastOperationDiff,
      operations,
      currencyType = 'RUB',
    } = this.props;

    const classes = classnames(styles.wrapper, className);

    return (
      <>
        <div className={classes}>
          <div className={styles.headerWrapper}>
            <h3
              className={styles.accountNumber}
            >{`Счет № ${accountNumber} `}</h3>
            <button
              className={styles.maximizeButton}
              onClick={this.handleMaximizeClick}
            >
              Full size
            </button>
          </div>
          <MoneyFormatter money={money} currencyType={currencyType}>
            {formattedMoney => (
              <strong className={styles.money}>{formattedMoney}</strong>
            )}
          </MoneyFormatter>
          <span className={styles.text}>{`${percent}% годовых`}</span>
          <span className={styles.text}>{`Создан ${createdAt}`}</span>
          <span className={styles.text}>
            {`Последняя операция ${lastOperation} `}(
            <MoneyFormatter
              money={lastOperationDiff}
              currencyType={currencyType}
              isDiff
            >
              {formattedMoney => <ColoredMoney>{formattedMoney}</ColoredMoney>}
            </MoneyFormatter>
            )
          </span>
        </div>
        {!!operations.length &&
          operations.map(operation => (
            <Operation
              key={operation.id}
              date={operation.createdAt}
              operation={operation.operation}
              operationDiff={operation.operationDiff}
              currencyType={operation.currencyType}
            />
          ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  operations: state.operations.operations,
});

const mapDispatchToProps = {
  onGetOperations: bankAccount => getOperations(bankAccount),
  onResetOperations: () => resetOperations(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
