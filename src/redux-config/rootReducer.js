import { combineReducers } from 'redux';
import  {CreateUserReducer}  from '../Component/User/Reducer/UserReducer';

/** Here combine both reducers where one is came from commons */
const combineReducer = { CreateUserReducer };
export const rootReducer = combineReducers(combineReducer);