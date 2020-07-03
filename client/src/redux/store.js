import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  user: userReducer
})

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware), devTools)
)

export default store
