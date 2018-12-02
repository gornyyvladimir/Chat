export const GET_BANK_ACCOUNTS = 'GET_BANK_ACCOUNTS';
export const RESET_BANK_ACCOUNTS = 'REST_BANK_ACCOUNTS';

// HERE WE NEED TO USE REDUX THUNK, BUT FOR EMULATE IT IS OK
export const getBanAccounts = bankAccountId => {
  return {
    type: GET_BANK_ACCOUNTS,
    payload: {
      bankAccountId,
    },
  };
};

export const resetBanAccounts = () => {
  return {
    type: RESET_BANK_ACCOUNTS,
  };
};
