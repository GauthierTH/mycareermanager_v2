import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
)

export default store
