import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';


const store = process.env.REACT_APP_ENV === undefined ?
    createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunk)
    )) :
    createStore(rootReducer, applyMiddleware(thunk));
export { store };
