import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export default function myStore(initialState) {
    return createStore(reducer, initialState, applyMiddleware(thunk));
}