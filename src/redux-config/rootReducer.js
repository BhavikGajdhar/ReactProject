import { combineReducers } from 'redux';
import  {createUserReducer}  from '../Components/User/Reducer/UserReducer';

/** Here combine both reducers where one is came from commons */
const combineReducer = { createUserReducer };
export const rootReducer = combineReducers(combineReducer);