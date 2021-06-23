import styled from 'styled-components'
import {ModalInternalContainer} from '../../../style/containers'
import {BaseButton} from '../../../style/buttons'


export const AddTileInternalContainer = styled(ModalInternalContainer)`
    height: 400px;
`

export const CreateTileButton = styled(BaseButton)`
    background: ${props => props.theme.primaryBlue};
    height: 45px;
    width: 80px;
`

export const DateInputContainer = styled.div`
    align-items: center;
    background: ${props => props.theme.graySix};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    height: 45px;
    justify-content: space-between;
    padding: 0 10px;
    width: 333px;

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 167ms;
    }
`

export const DateLabelContainer = styled.div`
    position: relative;
`

export const DateLabel = styled.span`
    position: absolute;
    text-transform: uppercase;
    font-size: 12px;
    top: -20px;
    left: 5px;
`
