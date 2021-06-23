import Axios from '../../../axios'
import {GET_TILES} from '../types'


export const getTiles = data => {
    return {
        type: GET_TILES,
        payload: data
    }
}

export const getTilesAction = () => async (dispatch) => {
    try {
        const response = await Axios.get(`/tiles/all/`)
        dispatch(getTiles(response.data))
    } catch (e) {
        console.log('Error getting all tiles>', e)
    }
}
