import {combineReducers} from 'redux';
import countReducer from './CountReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import getProducts from './GetProductReducer';
const roottReducer=combineReducers({
    countData:countReducer,
    proData:getProducts
})

export default roottReducer;