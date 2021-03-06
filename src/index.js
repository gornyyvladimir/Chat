import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import messagesReducer from './store/messages/reducer';
import usersReducer from './store/users/reducer';
import operationsReducer from './store/operations/reducer';
import bankAccountsReducer from './store/bankAccounts/reducer';

const rootReducer = combineReducers({
  messages: messagesReducer,
  users: usersReducer,
  operations: operationsReducer,
  bankAccounts: bankAccountsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
