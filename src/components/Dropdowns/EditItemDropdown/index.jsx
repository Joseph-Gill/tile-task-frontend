import React, {useState} from 'react'
import EditTileModal from '../../Modals/EditTileModal'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import pencil from '../../../assets/icons/pencil.svg'
import {DropdownButtonContainer, DropdownContent, DropdownContentContainer} from '../DropdownComponents/styles'
import {DeleteEditImage} from '../../../style/images'
import EditTaskModal from '../../Modals/EditTaskModal'


const EditItemDropdown = ({showEditDropdown, setShowEditDropdown, task, tile}) => {
    const [showEditTileModal, setShowEditTileModal] = useState(false)
    const [showEditTaskModal, setShowEditTaskModal] = useState(false)

    return (
        <DropdownInternalContainer
            setDropdownView={setShowEditDropdown}
            showDropdownView={showEditDropdown}
        >
            {showEditTileModal &&
                <EditTileModal
                    setShowEditDropdown={setShowEditDropdown}
                    setShowEditTileModal={setShowEditTileModal}
                    showEditTileModal={showEditTileModal}
                    tile={tile}
                />}
            {showEditTaskModal &&
                <EditTaskModal
                    setShowEditDropdown={setShowEditDropdown}
                    setShowEditTaskModal={setShowEditTaskModal}
                    showEditTaskModal={showEditTaskModal}
                    task={task}
                />
            }
            <DropdownButtonContainer onClick={() => setShowEditDropdown(!showEditDropdown)}>
                <DeleteEditImage alt='edit task or tile' src={pencil} />
            </DropdownButtonContainer>
            <DropdownContentContainer show={showEditDropdown ? 1 : 0}>
                {!!task &&
                    <DropdownContent onClick={() => setShowEditTaskModal(true)}>Edit Task</DropdownContent>}
                <DropdownContent onClick={() => setShowEditTileModal(true)}>Edit Tile</DropdownContent>
            </DropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default EditItemDropdown
