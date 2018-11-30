const CurrencySymbol = ({ children, currencyType }) => {
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

  return children(getCurrencySymbol(currencyType));
};

export default CurrencySymbol;
