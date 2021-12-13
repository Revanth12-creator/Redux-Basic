import {createStore,applyMiddleware} from 'redux';
import roottReducer from './Reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

//const appStore=createStore(roottReducer,applyMiddleware(thunk));
const appStore=createStore(roottReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

export default appStore;

