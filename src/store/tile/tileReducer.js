import {GET_TILES} from './types'


const initialState = {
    tiles: [],
    loaded: false
}

export const tileReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TILES: {
            return {
                tiles: action.payload,
                loaded: true
            }
        }
        default:
            return state
    }
}
