import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {editTaskAction} from '../../../store/task/actions'
import {ModalTitle} from '../../../style/titles'
import {ModalInput} from '../../../style/inputs'
import {ModalSelect} from '../../../style/selects'
import {ModalTextArea} from '../AddTaskModal/styles'
import {CancelButton, SaveButton} from '../../../style/buttons'
import {AddEditTaskInternalContainer, ModalButtonContainer} from '../../../style/containers'


const EditTaskModal = ({setShowEditDropdown, showEditTaskModal, setShowEditTaskModal, task}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [taskInfo, setTaskInfo] = useState({
        title: task.title,
        description: task.description,
        type: task.type,
    })

    const handleEditTaskClick = async () => {
        setLoading(true)
        const response = await dispatch(editTaskAction(taskInfo, task.id))
        if (response) {
            setShowEditDropdown(false)
            setShowEditTaskModal(false)
        }
    }

    const handleCancelEditTaskClick = () => {
        setShowEditDropdown(false)
        setShowEditTaskModal(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowEditTaskModal}
            showModalView={showEditTaskModal}
        >
            <AddEditTaskInternalContainer>
                <ModalTitle>Edit Task</ModalTitle>
                <ModalInput
                    onChange={(e) => setTaskInfo({...taskInfo, title: e.target.value})}
                    placeholder='Title'
                    type='text'
                    value={taskInfo.title}
                />
                <ModalSelect
                    onChange={(e) => setTaskInfo({...taskInfo, type: e.target.value})}
                    value={taskInfo.type}
                >
                    <option value='SURVEY'>SURVEY</option>
                    <option value='DISCUSSION'>DISCUSSION</option>
                    <option value='DIARY'>DIARY</option>
                </ModalSelect>
                <ModalTextArea
                    onChange={(e) => setTaskInfo({...taskInfo, description: e.target.value})}
                    placeholder='Description'
                    value={taskInfo.description}
                />
                <ModalButtonContainer>
                    <SaveButton disabled={loading} onClick={handleEditTaskClick}>Save</SaveButton>
                    <CancelButton disabled={loading} onClick={handleCancelEditTaskClick}>Cancel</CancelButton>
                </ModalButtonContainer>
            </AddEditTaskInternalContainer>
        </ModalExternalContainer>
    )
}

export default EditTaskModal
