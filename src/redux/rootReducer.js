import { combineReducers } from 'redux';
import onAction from '../reducers/reducer';

/** Here combine both reducers where one is came from commons */
const combineReducer = {  ...onAction };
export const rootReducer = combineReducers(combineReducer);