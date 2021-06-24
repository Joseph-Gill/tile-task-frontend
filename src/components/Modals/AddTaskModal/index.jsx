import React, {useState} from 'react'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {useDispatch} from 'react-redux'
import {createTaskAction} from '../../../store/task/actions'
import {CancelButton} from '../../../style/buttons'
import {ModalTitle} from '../../../style/titles'
import {ModalSelect} from '../../../style/selects'
import {ModalInput} from '../../../style/inputs'
import {CreateTaskButton, ModalTextArea} from './styles'
import {AddEditTaskInternalContainer, ModalButtonContainer} from '../../../style/containers'


const AddTaskModal = ({showAddTaskModal, setShowAddTaskModal, tileId}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [newTaskInfo, setNewTaskInfo] = useState({
        title: '',
        description: '',
        type: '',
    })

    const handleCreateTaskClick = async () => {
        setLoading(true)
        const response = await dispatch(createTaskAction(newTaskInfo, tileId))
        if (response) {
            setShowAddTaskModal(false)
        }
    }

    return (
        <ModalExternalContainer
            setModalView={setShowAddTaskModal}
            showModalView={showAddTaskModal}
        >
            <AddEditTaskInternalContainer>
                <ModalTitle>Add a new Task</ModalTitle>
                <ModalInput
                    onChange={(e) => setNewTaskInfo({...newTaskInfo, title: e.target.value})}
                    placeholder='Title'
                    type='text'
                    value={newTaskInfo.title}
                />
                <ModalSelect
                    onChange={(e) => setNewTaskInfo({...newTaskInfo, type: e.target.value})}
                    value={newTaskInfo.type}
                >
                    <option value=''>Select a type</option>
                    <option value='SURVEY'>SURVEY</option>
                    <option value='DISCUSSION'>DISCUSSION</option>
                    <option value='DIARY'>DIARY</option>
                </ModalSelect>
                <ModalTextArea
                    onChange={(e) => setNewTaskInfo({...newTaskInfo, description: e.target.value})}
                    placeholder='Description'
                    value={newTaskInfo.description}
                />
                <ModalButtonContainer>
                    <CreateTaskButton disabled={loading} onClick={handleCreateTaskClick}>Create</CreateTaskButton>
                    <CancelButton disabled={loading} onClick={() => setShowAddTaskModal(false)}>Cancel</CancelButton>
                </ModalButtonContainer>
            </AddEditTaskInternalContainer>
        </ModalExternalContainer>
    )
}

export default AddTaskModal
