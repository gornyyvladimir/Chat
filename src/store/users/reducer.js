import { SET_CURRENT_USER } from './actions';

const initialState = {
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user,
      };
    default:
      return state;
  }
};

export default reducer;
