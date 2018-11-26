import { SEND_MESSAGE, ADD_MESSAGE } from './actions';

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
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [{
        id: action.payload.message.id,
        createdAt: action.payload.message.createdAt,
        senderId: action.payload.message.senderId,
        text: action.payload.message.text
        }, ...state.messages],
      };
    default:
      return state;
  }
};

export default reducer;
