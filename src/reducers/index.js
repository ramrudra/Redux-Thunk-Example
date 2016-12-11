import { combineReducers } from 'redux';

function matches(state = null, action) {

    switch (action.type) {
        case "FETCH_MATCHES":
            return action.data;
        default:
            return state;
    }
}

function isLoading(state = false, action) {

    switch (action.type) {
        case "FETCH_LOADING":
            return action.status;
        default:
            return state;
    }
}

function error(state = null, action) {

    switch (action.type) {
        case "FETCH_ERROR":
            return action.error;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    isLoading,
    matches,
    error
});

export default rootReducer;
