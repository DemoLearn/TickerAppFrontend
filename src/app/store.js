import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { devTools } from 'redux-devtools'
import rootReducer from './reducers';


export default function () {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    return store;
}
