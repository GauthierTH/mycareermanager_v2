import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store
