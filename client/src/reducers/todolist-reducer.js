import { FETCH_TODOLIST, ADD_TODOLIST, DELETE_TODOLIST } from '../actions/action-types';

const todolist = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_TODOLIST:
            return { ...state, todos: action.payload, shouldRefresh: false };
        case ADD_TODOLIST: {
            return { ...state, shouldRefresh: true }
        }
        case DELETE_TODOLIST: {
            return { ...state, shouldRefresh: true }
        }
        default:
            return state;
    }
}


const defaultState = {
    todos: [],
    shouldRefresh: false
}

export default todolist;