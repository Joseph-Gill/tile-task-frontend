import React, {forwardRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import DatePicker from 'react-datepicker'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {editTileAction} from '../../../store/tile/actions'
import {convertDate, createDate} from '../../../helpers'
import calender from '../../../assets/icons/calendar_icon.svg'
import {ModalTitle} from '../../../style/titles'
import {ModalSelect} from '../../../style/selects'
import {CancelButton, SaveButton} from '../../../style/buttons'
import {AddEditTileInternalContainer, ModalButtonContainer} from '../../../style/containers'
import {DateInputContainer, DateLabel, DateLabelContainer} from '../AddTileModal/styles'
import "react-datepicker/dist/react-datepicker.css";

const EditTileModal = ({setShowEditDropdown, showEditTileModal, setShowEditTileModal, tile}) => {
    const ref = React.createRef()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [tileInfo, setTileInfo] = useState({
        launch_date: createDate(tile.launch_date),
        status: tile.status
    })

    const handleEditTileClick = async () => {
        const tileData = {
            launch_date: convertDate(tileInfo.launch_date),
            status: tileInfo.status
        }
        setLoading(true)
        const response = await dispatch(editTileAction(tileData, tile.id))
        if (response) {
            setShowEditDropdown(false)
            setShowEditTileModal(false)
        }
    }

    const handleCancelEditTileClick = () => {
        setShowEditDropdown(false)
        setShowEditTileModal(false)
    }

    // This enables the ability to style the react-datepicker input component, by styling this component
    // eslint-disable-next-line react/display-name,react/no-multi-comp
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <DateInputContainer onClick={onClick} ref={ref}>
            <div>{value}</div>
            <img alt='calendar' src={calender} />
        </DateInputContainer>
    ))

    return (
        <ModalExternalContainer
            setModalView={setShowEditTileModal}
            showModalView={showEditTileModal}
        >
            <AddEditTileInternalContainer>
                <ModalTitle>Edit Tile</ModalTitle>
                <ModalSelect
                    onChange={(e) => setTileInfo({...tileInfo, status: e.target.value})}
                    value={tileInfo.status}
                >
                    <option value='LIVE'>LIVE</option>
                    <option value='PENDING'>PENDING</option>
                    <option value='ARCHIVED'>ARCHIVED</option>
                </ModalSelect>
                <DateLabelContainer>
                    <DateLabel>Launch Date</DateLabel>
                    <DatePicker
                        customInput={<CustomInput ref={ref} />}
                        dateFormat='yyyy-MM-dd'
                        onChange={date => setTileInfo({...tileInfo, launch_date: date})}
                        selected={tileInfo.launch_date}
                    />
                </DateLabelContainer>
                <ModalButtonContainer>
                    <SaveButton disabled={loading} onClick={handleEditTileClick}>Save</SaveButton>
                    <CancelButton disabled={loading} onClick={handleCancelEditTileClick}>Cancel</CancelButton>
                </ModalButtonContainer>
            </AddEditTileInternalContainer>
        </ModalExternalContainer>
    )
}

export default EditTileModal
