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
