import React, {useState} from 'react'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {createTaskAction} from '../../../store/task/actions'


const AddTaskInternalContainer = styled.div`
    align-items: center;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    height: 313px;
    justify-content: space-between;
    padding: 20px;
    width: 400px;
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
                <div>Add a new Task</div>
                <input
                    onChange={(e) => setNewTaskInfo({...newTaskInfo, title: e.target.value})}
                    placeholder='Title'
                    type='text'
                    value={newTaskInfo.title}
                />
                <select
                    onChange={(e) => setNewTaskInfo({...newTaskInfo, type: e.target.value})}
                    value={newTaskInfo.type}
                >
                    <option value=''>Select a type</option>
                    <option value='SURVEY'>SURVEY</option>
                    <option value='DISCUSSION'>DISCUSSION</option>
                    <option value='DIARY'>DIARY</option>
                </select>
                <textarea
                    onChange={(e) => setNewTaskInfo({...newTaskInfo, description: e.target.value})}
                    placeholder='Description'
                    value={newTaskInfo.description}
                />
                <div>
                    <button disabled={loading} onClick={handleCreateTaskClick}>Create</button>
                    <button disabled={loading} onClick={() => setShowAddTaskModal(false)}>Cancel</button>
                </div>
            </AddTaskInternalContainer>
        </ModalExternalContainer>
    )
}

export default AddTaskModal
