import { GET_BANK_ACCOUNTS, RESET_BANK_ACCOUNTS } from './actions';
import dummyBankAccounts from '../../dummyBankAccounts';

const initialState = {
  bankAccounts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANK_ACCOUNTS:
      return {
        ...state,
        bankAccounts: dummyBankAccounts,
      };
    case RESET_BANK_ACCOUNTS:
      return {
        ...state,
        bankAccounts: [],
      };
    default:
      return state;
  }
};

export default reducer;
