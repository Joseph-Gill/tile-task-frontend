import React, {useState} from 'react'
import EditTileModal from '../../Modals/EditTileModal'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import pencil from '../../../assets/icons/pencil.svg'
import {DropdownButtonContainer, DropdownContent, DropdownContentContainer} from '../DropdownComponents/styles'
import {DeleteEditImage} from '../../../style/images'


const EditItemDropdown = ({showEditDropdown, setShowEditDropdown, task, tile}) => {
    const [showEditTileModal, setShowEditTileModal] = useState(false)

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
            <DropdownButtonContainer onClick={() => setShowEditDropdown(!showEditDropdown)}>
                <DeleteEditImage alt='edit task or tile' src={pencil} />
            </DropdownButtonContainer>
            <DropdownContentContainer show={showEditDropdown ? 1 : 0}>
                {!!task && <DropdownContent>Edit Task</DropdownContent>}
                <DropdownContent onClick={() => setShowEditTileModal(true)}>Edit Tile</DropdownContent>
            </DropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default EditItemDropdown
