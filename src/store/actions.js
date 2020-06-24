import { SET_TASKS, INCREMENT, DECREMENT } from './actionsTypes'

export const setTasks = tasks => {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export const incrementChecked = () => {
    return {    
        type: INCREMENT
    }
}

export const decrementChecked = () => {
    return {    
        type: DECREMENT
    }
}