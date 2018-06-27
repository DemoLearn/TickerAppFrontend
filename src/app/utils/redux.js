import { combineReducers as combineImmutableReducers } from 'redux-immutable';
import { Record } from 'immutable';


/**
 * Wrapper over redux's combineReducers. It produces reducer
 * with Immutable.Record state.
 * @param {Object} reducers Plain object of reducers to combine.
 * @return {Function} Combined reducer.
 */
export const combineReducers = reducers => {
    const currentState = void 0;
    const initAction = { type: null };
    const initialState = Object.keys(reducers).reduce((result, reducerKey) => ({
        ...result,
        [reducerKey]: reducers[reducerKey].call(null, currentState, initAction)
    }), {});
    return combineImmutableReducers(reducers, Record(initialState));
};
