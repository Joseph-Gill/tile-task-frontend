import styled from 'styled-components'


export const TileCardContainer = styled.div`
    align-items: center;
    background-color: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: 20px;
    box-shadow: ${props => props.theme.normalBoxShadows[9]};
    display: flex;
    flex-direction: column;
    height: 425px;
    justify-content: space-between;
    padding: 20px;
    width: 500px;
`

export const TileCardRow = styled.div`
    align-items: center;
    display: flex;
    width: 100%;
`

export const TileTextContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 80%;
`
