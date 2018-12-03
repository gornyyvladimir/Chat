import { ADD_MESSAGE } from './actions';

const initialState = {
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          {
            id: action.payload.message.id,
            createdAt: action.payload.message.createdAt,
            senderId: action.payload.message.senderId,
            text: JSON.parse(action.payload.message.text),
          },
          ...state.messages,
        ],
      };
    default:
      return state;
  }
};

export default reducer;
