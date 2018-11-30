export const GET_OPERATIONS = 'GET_OPERATIONS';
export const RESET_OPERATIONS = 'REST_OPERATIONS';

// HERE WE NEED TO USE REDUX THUNK, BUT FOR EMULATE IT IS OK
export const getOperations = bankAccountId => {
  return {
    type: GET_OPERATIONS,
    payload: {
      bankAccountId,
    },
  };
};

export const resetOperations = () => {
  return {
    type: RESET_OPERATIONS,
  };
};
