import { createStore, combineReducers } from 'redux';
import poisReducer from '../reducers/poisReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ poisModel: poisReducer });
const storeConfiguration = () => createStore(rootReducer, applyMiddleware(thunk));

export default storeConfiguration;