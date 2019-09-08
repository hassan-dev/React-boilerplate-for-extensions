import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './Reducers/loginReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const rootReducer = combineReducers({
    loginReducer
  })

const store = createStore(rootReducer,applyMiddleware(thunk,logger))

export default store

