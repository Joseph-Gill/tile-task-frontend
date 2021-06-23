import styled from 'styled-components'
import {BaseButton} from '../../../style/buttons'


export const AddTaskInternalContainer = styled.div`
    align-items: center;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-between;
    padding: 20px;
    width: 375px;
`

export const ModalButtonContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
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
