import { combineReducers } from '../utils/redux';
import { default as user } from './userReducer';
import { default as tasks } from './tasksReducer';


export default combineReducers({
    user,
    tasks
});
