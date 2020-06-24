import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import TasksReducer from './reducer'

const reducers = combineReducers({
    tasks: TasksReducer,
})

const storeConfig = () => {
    return createStore(
        reducers,
        compose(applyMiddleware(thunk))
    )
}

export default storeConfig;
