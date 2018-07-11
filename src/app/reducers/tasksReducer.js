import { Map } from 'immutable';
import ActionTypes from '../constants/actionTypes';


export default (state = null, action) => {

    if (state === null) {
        state = new Map({
            tasksList: new Map(),
            error: null
        });
    }

    switch (action.type) {

        case ActionTypes.GET_TASKS: {
            return state.update('tasksList', () => new Map(action.tasks));
        }

        case ActionTypes.SERVER_ERROR: {
            return state.update('error', () => action.message);
        }

        default: {
            return state;
        }

    }

};
