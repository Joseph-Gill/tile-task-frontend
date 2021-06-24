import styled from 'styled-components'
import {BaseButton} from '../../style/buttons'
import {ModalSelect} from '../../style/selects'


export const TilesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    position: relative;
`

export const HeaderContainer = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 20px;
    margin-top: 100px;
    width: 1020px;
`

export const HeaderLowerBar = styled.div`
    border-bottom: 2px solid ${props => props.theme.grayFour};
    width: 45%;
`

export const HeaderTitle = styled.div`
    align-items: center;
    border-left: 2px solid ${props => props.theme.grayFour};
    border-right: 2px solid ${props => props.theme.grayFour};
    border-top: 2px solid ${props => props.theme.grayFour};
    display: flex;
    height: 50px;
    justify-content: center;
    width: 10%;
`

export const AddTileButton = styled(BaseButton)`
    background: ${props => props.theme.primaryBlue};
    position: absolute;
    height: 45px;
    right: 0;
    top: -10px;
    width: 100px;

`

export const FilterTilesSelect = styled(ModalSelect)`
    position: absolute;
    width: 100px;
    top: -10px;
`

export const FilterLabel = styled.span`
    position: absolute;
    text-transform: uppercase;
    font-size: 12px;
    top: -28px;
    left: 5px;
`

export const NoTilesToDisplayContainer = styled.div`
    left: -48px;
    position: absolute;
    width: 200px;
`
