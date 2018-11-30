import { GET_OPERATIONS, RESET_OPERATIONS } from './actions';
import dummyOperations from '../../dummyOperations';

const initialState = {
  operations: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OPERATIONS:
      return {
        ...state,
        operations: dummyOperations,
      };
    case RESET_OPERATIONS:
      return {
        ...state,
        operations: [],
      };
    default:
      return state;
  }
};

export default reducer;
