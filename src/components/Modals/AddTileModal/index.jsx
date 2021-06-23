import React, {forwardRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import DatePicker from 'react-datepicker'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {createTileAction} from '../../../store/tile/actions'
import {convertDate} from '../../../helpers'
import calender from '../../../assets/icons/calendar_icon.svg'
import {ModalTitle} from '../../../style/titles'
import {ModalSelect} from '../../../style/selects'
import {CancelButton} from '../../../style/buttons'
import {ModalButtonContainer} from '../../../style/containers'
import {AddTileInternalContainer, CreateTileButton, DateInputContainer, DateLabel, DateLabelContainer} from './styles'
import "react-datepicker/dist/react-datepicker.css";


const AddTileModal = ({showAddTileModal, setShowAddTileModal}) => {
    const ref = React.createRef()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [newTileInfo, setNewTileInfo] = useState({
        launch_date: new Date(),
        status: '',
    })

    const handleCreateTileClick = async () => {
        const tileData = {
            launch_date: convertDate(newTileInfo.launch_date),
            status: newTileInfo.status
        }
        setLoading(true)
        const response = await dispatch(createTileAction(tileData))
        if (response) {
            setShowAddTileModal(false)
        }
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
            setModalView={setShowAddTileModal}
            showModalView={showAddTileModal}
        >
            <AddTileInternalContainer>
                <ModalTitle>Add a new Tile</ModalTitle>
                <ModalSelect
                    onChange={(e) => setNewTileInfo({...newTileInfo, status: e.target.value})}
                    value={newTileInfo.status}
                >
                    <option value=''>Select status</option>
                    <option value='LIVE'>LIVE</option>
                    <option value='PENDING'>PENDING</option>
                    <option value='ARCHIVED'>ARCHIVED</option>
                </ModalSelect>
                <DateLabelContainer>
                    <DateLabel>Launch Date</DateLabel>
                    <DatePicker
                        customInput={<CustomInput ref={ref} />}
                        dateFormat='yyyy-MM-dd'
                        onChange={date => setNewTileInfo({...newTileInfo, launch_date: date})}
                        selected={newTileInfo.launch_date}
                    />
                </DateLabelContainer>
                <ModalButtonContainer>
                    <CreateTileButton disabled={loading} onClick={handleCreateTileClick}>Create</CreateTileButton>
                    <CancelButton disabled={loading} onClick={() => setShowAddTileModal(false)}>Cancel</CancelButton>
                </ModalButtonContainer>
            </AddTileInternalContainer>
        </ModalExternalContainer>
    )
}

export default AddTileModal
