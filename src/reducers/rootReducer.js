// BT named this file index.js so he didn't have to type that when importing it inside the store
// I feel it is more clear to just type rootReducer.js
import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
        posts: postReducer
});
