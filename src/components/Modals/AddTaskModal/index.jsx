import React, {useState} from 'react'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {createTaskAction} from '../../../store/task/actions'
import {BaseButton, CancelButton} from '../../../style/buttons'
import {ModalTitle} from '../../../style/titles'
import {ModalSelect} from '../../../style/selects'
import {ModalInput} from '../../../style/inputs'


const AddTaskInternalContainer = styled.div`
    align-items: center;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-between;
    padding: 20px;
    width: 375px;
`

const ModalButtonContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

export const CreateTaskButton = styled(BaseButton)`
    background: ${props => props.theme.primaryBlue};
    height: 45px;
    width: 80px;
`

export const ModalTextArea = styled.textarea`
    background: ${props => props.theme.graySix};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    font-size: 14px;
    line-height: 19px;
    height: 200px;
    width: 100%;
    padding: 10px;
    resize: none;
`

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
            <AddTaskInternalContainer>
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
            </AddTaskInternalContainer>
        </ModalExternalContainer>
    )
}

export default AddTaskModal
