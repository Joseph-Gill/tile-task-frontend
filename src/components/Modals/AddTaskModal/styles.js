import styled from 'styled-components'
import {BaseButton} from '../../../style/buttons'
import {ModalInternalContainer} from '../../../style/containers'


export const AddTaskInternalContainer = styled(ModalInternalContainer)`
    height: 500px;
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
