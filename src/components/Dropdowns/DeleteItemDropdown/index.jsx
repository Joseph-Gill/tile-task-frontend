import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {deleteTileAction} from '../../../store/tile/actions'
import trashCan from '../../../assets/icons/trash-can.svg'
import {DeleteEditImage} from '../../../style/images'
import {DropdownButtonContainer, DropdownContent, DropdownContentContainer} from '../DropdownComponents/styles'
import Loading from '../../Loading'


const DeleteItemDropdown = ({showDeleteDropdown, setShowDeleteDropdown, taskId, tileId}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const handleDeleteTileClick = async () => {
        setLoading(true)
        dispatch(deleteTileAction(tileId))
    }

    const handleDeleteTaskClick = async () => {

    }

    return (
        <DropdownInternalContainer
            setDropdownView={setShowDeleteDropdown}
            showDropdownView={showDeleteDropdown}
        >
            <DropdownButtonContainer onClick={() => setShowDeleteDropdown(!showDeleteDropdown)}>
                <DeleteEditImage alt='delete task or tile' src={trashCan} />
            </DropdownButtonContainer>
            <DropdownContentContainer show={showDeleteDropdown ? 1 : 0}>
                {loading ? <Loading /> : (
                    <>
                        {taskId && <DropdownContent>Delete Task</DropdownContent>}
                        <DropdownContent onClick={handleDeleteTileClick}>Delete Tile</DropdownContent>
                    </>)}
            </DropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default DeleteItemDropdown
