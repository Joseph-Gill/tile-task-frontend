import Axios from '../../../axios'
import {getTilesAction} from '../../tile/actions'


export const createTaskAction = (taskInfo, tileId) => async (dispatch) => {
    try {
        const response = await Axios.post(`/tasks/tile/${tileId}/`, taskInfo)
        if (response.status === 201) {
            await dispatch(getTilesAction())
            return response.data
        }
    } catch (e) {
        console.log('Error creating new task>', e)
    }
}

export const deleteTaskAction = taskId => async (dispatch) => {
    try {
        const response = await Axios.delete(`/tasks/task/${taskId}/`)
        if (response.status) {
            await dispatch(getTilesAction())
            return true
        }
    } catch (e) {
        console.log('Error deleting a specified task>', e)
    }
}
