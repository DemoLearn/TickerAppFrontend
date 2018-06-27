import { List } from 'immutable';


export default (currentState = null, action) => {

    let state = currentState;

    if (state === null) {
        state = new List();
    }

    switch (action.type) {

        default: {
            return state;
        }

    }

};
