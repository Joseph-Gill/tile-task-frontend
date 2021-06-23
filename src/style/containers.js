import styled from 'styled-components'


export const BasePageContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: ${props => props.theme.grayFive};
`
