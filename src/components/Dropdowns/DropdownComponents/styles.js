import styled from 'styled-components'


export const DropdownButtonContainer = styled.div`
    align-items: center;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    height: 35px;
    justify-content: center;
    width: 35px;

    :focus {
        background: ${props => props.theme.iconHoverBackground};
    }

    :hover {
        background: ${props => props.theme.iconHoverBackground};
    }

`

export const DropdownContent = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 38px;
    justify-content: space-between;
    padding: 12px;

    :hover {
        background-color: ${props => props.theme.grayFive};
        text-decoration: underline;
    }
`

export const DropdownContentContainer = styled.div`
    background-color: ${props => props.theme.white};
    display: ${props => props.show ? 'block' : 'none'};
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    margin-top: 2px;
    position: absolute;
    width: 100px;
    z-index: 1;

    ${DropdownContent}:first-child {
        border-top-right-radius: ${props => props.theme.borderRadius};
    }

    ${DropdownContent}:last-child {
        border-bottom-left-radius: ${props => props.theme.borderRadius};
        border-bottom-right-radius: ${props => props.theme.borderRadius};
    }
`
