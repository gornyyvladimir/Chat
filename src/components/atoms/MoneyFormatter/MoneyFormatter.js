const MoneyFormatter = ({ children, money, currencyType, isDiff }) => {
  const isPositive = money > 0;
  const operationSymbol = isPositive ? '+ ' : '- ';

  const getCurrencySymbol = currencyType => {
    switch (currencyType) {
      case 'RUB':
        return '₽';
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '';
    }
  };

  const formattedMoney = `${isDiff ? operationSymbol : ''}${
    isPositive ? money.toLocaleString() : (money * -1).toLocaleString()
  } ${getCurrencySymbol(currencyType)}`;

  return children(formattedMoney);
};

export default MoneyFormatter;
