import { legacy_createStore  as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerGreeting from './greetings/greetingReducer'

const rootReducer = combineReducers({
    greetings: reducerGreeting
})


const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)))


export default store