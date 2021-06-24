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
        return response.data
    } catch (e) {
        console.log('Error getting all tiles>', e)
    }
}

export const createTileAction = tileInfo => async (dispatch) => {
    try {
        const response = await Axios.post(`/tiles/tile/create/`, tileInfo)
        if (response.status === 201) {
            await dispatch(getTilesAction())
            return response.data
        }
    } catch (e) {
        console.log('Error creating new tile>', e)
    }
}

export const deleteTileAction = tileId => async (dispatch) => {
    try {
        const response = await Axios.delete(`/tiles/tile/${tileId}/`)
        if (response.status) {
            await dispatch(getTilesAction())
            return true
        }
    } catch (e) {
        console.log('Error deleting specified tile>', e)
    }
}
