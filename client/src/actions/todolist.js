import { FETCH_TODOLIST, ADD_TODOLIST, DELETE_TODOLIST } from './action-types';

export const fetchTasksAction = () => {
    return dispatch => {
        fetch('/tasks').then(res => res.json()).then((data) => {
            dispatch({
                type: FETCH_TODOLIST,
                payload: data
            })
        })
    }
}

export const addTaskAction = task => {
    return dispatch => {
        fetch('/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            dispatch({
                type: ADD_TODOLIST
            });
        });
    }
}

export const deleteTaskAction = id => {
    return dispatch => {
        fetch(`/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            dispatch({
                type: DELETE_TODOLIST
            });
        });
    }
}
