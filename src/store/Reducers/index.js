import {combineReducers} from 'redux';
import countReducer from './CountReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
const roottReducer=combineReducers({
    countData:countReducer,
})

export default roottReducer;