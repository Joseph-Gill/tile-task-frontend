import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import trashCan from '../../../assets/icons/trash-can.svg'
import {DeleteEditImage} from '../../../style/images'
import {DropdownButtonContainer, DropdownContent, DropdownContentContainer} from '../DropdownComponents/styles'


const DeleteItemDropdown = ({showDeleteDropdown, setShowDeleteDropdown}) => {
    return (
        <DropdownInternalContainer
            setDropdownView={setShowDeleteDropdown}
            showDropdownView={showDeleteDropdown}
        >
            <DropdownButtonContainer onClick={() => setShowDeleteDropdown(!showDeleteDropdown)}>
                <DeleteEditImage alt='delete task or tile' src={trashCan} />
            </DropdownButtonContainer>
            <DropdownContentContainer show={showDeleteDropdown ? 1 : 0}>
                <DropdownContent>Delete Task</DropdownContent>
                <DropdownContent>Delete Tile</DropdownContent>
            </DropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default DeleteItemDropdown
