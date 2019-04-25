import { combineReducers } from 'redux';
import indexReducer from './indexReducer';
// import errorReducer from './errorReducer'

export default combineReducers({
    index: indexReducer
})