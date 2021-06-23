import styled from 'styled-components'


export const BaseButton = styled.button`
    background: ${props => props.theme.primaryBlue};
    border: none;
    border-radius: ${props => props.theme.buttonBorderRadius};
    box-shadow: ${props => props.theme.normalBoxShadows[3]};
    color: ${props => props.theme.white};
    text-align: center;

    :active {
        outline: none;
        transform: translateY(1px);
    }

    :hover {
        background: ${props => props.disabled ? '' : props.theme.blueHover};
        font-weight: 500;
    }
`

export const CancelButton = styled(BaseButton)`
    background-color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayTwo};
    color: ${props => props.theme.grayTwo};
    height: 45px;
    width: 80px;

    :hover {
        background: ${props => props.disabled ? '' : props.theme.grayFive};
        border: 2px solid ${props => props.theme.grayTwo};
        font-weight: 500;
    }
`
