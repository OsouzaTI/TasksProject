import { SET_TASKS, INCREMENT, DECREMENT } from './actionsTypes'

const initialState = {
    tasks: [],
    tasksChecked: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:    
            console.log(state.tasks)       
            return {
                ...state,
                tasks: state.tasks.concat(action.payload)
            }  
        case INCREMENT:
            return {
                ...state,
                tasksChecked: state.tasksChecked + 1
            }
        case DECREMENT:
            return {
                ...state,
                tasksChecked: state.tasksChecked - 1
            }
        default:
            console.log('default')
            return state;
    }
}

export default reducer;