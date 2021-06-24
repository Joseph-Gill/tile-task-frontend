import styled from 'styled-components'


export const BasePageContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${props => props.theme.grayFive};
`

export const ModalInternalContainer = styled.div`
    align-items: center;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
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

export const AddEditTileInternalContainer = styled(ModalInternalContainer)`
    height: 400px;
`
