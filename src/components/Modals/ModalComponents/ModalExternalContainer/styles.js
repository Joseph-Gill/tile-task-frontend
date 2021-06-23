import styled from 'styled-components'


export const ExternalModalContainer = styled.div`
    align-items: center;
    background-color: ${props => props.theme.modalBackdropColor};
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
    z-index: 999;
 `
