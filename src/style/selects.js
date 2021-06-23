import styled from 'styled-components'


export const ModalSelect = styled.select`
    background: ${props => props.theme.graySix};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    font-size: 14px;
    height: 45px;
    line-height: 19px;
    padding: 10px;
    width: 100%;
`
