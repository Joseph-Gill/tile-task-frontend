import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {tileReducer} from './tile/tileReducer'

// Redux Reducers
export const reducers = combineReducers({
    tileReducer,
})

// Thunk
const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export const store = createStore(reducers, enhancer)
