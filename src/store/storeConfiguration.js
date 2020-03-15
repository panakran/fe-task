import { createStore, combineReducers } from 'redux';
import PoisReducer from '../reducers/PoisReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ poisModel: PoisReducer });
const storeConfiguration = () => createStore(rootReducer, applyMiddleware(thunk));

export default storeConfiguration;