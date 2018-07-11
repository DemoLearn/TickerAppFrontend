import { fetchJson } from '../utils/fetch';
import ActionTypes from '../constants/actionTypes';


export const getTasks = () => dispatch => {
    fetchJson('http://localhost:8090/tasks', { mode: 'cors', credentials: null })
        .then(tasks => {
            dispatch({ type: ActionTypes.GET_TASKS, tasks });
        })
        .catch(error => {
            dispatch({ type: ActionTypes.SERVER_ERROR, message: error.message });
            dispatch({ type: ActionTypes.GET_TASKS, tasks: {} });
        });
};
