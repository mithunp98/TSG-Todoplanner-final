import { combineReducers } from 'redux';
import commonReducer from './common';

const RootReducer: any = combineReducers({
    common: commonReducer,
});

export default RootReducer;
