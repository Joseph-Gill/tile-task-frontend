import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import pencil from '../../../assets/icons/pencil.svg'
import {DropdownButtonContainer, DropdownContent, DropdownContentContainer} from '../DropdownComponents/styles'
import {DeleteEditImage} from '../../../style/images'


const EditItemDropdown = ({showEditDropdown, setShowEditDropdown}) => {
    return (
        <DropdownInternalContainer
            setDropdownView={setShowEditDropdown}
            showDropdownView={showEditDropdown}
        >
            <DropdownButtonContainer onClick={() => setShowEditDropdown(!showEditDropdown)}>
                <DeleteEditImage alt='edit task or tile' src={pencil} />
            </DropdownButtonContainer>
            <DropdownContentContainer show={showEditDropdown ? 1 : 0}>
                <DropdownContent>Edit Task</DropdownContent>
                <DropdownContent>Edit Tile</DropdownContent>
            </DropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default EditItemDropdown
