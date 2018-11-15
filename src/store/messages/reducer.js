import { SEND_MESSAGE } from './actions';

const initialState = {
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [action.payload.message, ...state.messages],
      };
    default:
      return state;
  }
};

export default reducer;
