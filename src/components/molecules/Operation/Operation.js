import React from 'react'
import ColoredMoney from '../../atoms/ColoredMoney/ColoredMoney';

const Operation = ({date, operation, operationDiff}) => {
  return (
    <div>
      <span className={styles.date}>{date}</span>
      <span className={styles.text}>
        {`${operation} `}
        <ColoredMoney
          money={operationDiff}
          currencySymbol={getCurrencySymbol(currencyType)}
        />
      </span>
    </div>
  )
}

export default Operation
