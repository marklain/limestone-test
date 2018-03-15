import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    repos: reposReducer,
    profileInfo: profileReducer
});
