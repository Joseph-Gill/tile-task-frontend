import styled from 'styled-components'
import {BaseButton} from '../../style/buttons'


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

export const TaskNumberTypeRow = styled(TileCardRow)`
    justify-content: space-between;
`

export const TitleContainer = styled(TileTextContainer)`
    height: 40px;
`

export const DescriptionTaskToggleRow = styled(TileCardRow)`
    justify-content: center;
    position: relative;
`

export const DescriptionContainer = styled(TileTextContainer)`
    height: 100px;
`

export const CreatedDateRow = styled(TileCardRow)`
    justify-content: flex-start;
`

export const TileTaskDivider = styled.div`
    border-bottom: 2px solid ${props => props.theme.grayFour};
    height: 2px;
    width: 500px;
`

export const TileButtonRow = styled(TileCardRow)`
    justify-content: flex-start;
    position: relative;
`

export const AddTaskButton = styled(BaseButton)`
    background: ${props => props.theme.primaryBlue};
    height: 45px;
    width: 100px;
`

export const LaunchDateStatusRow = styled(TileCardRow)`
    justify-content: space-between;
`

export const ImageContainer = styled.div`
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 36px;
    position: absolute;
    width: 36px;

    :hover {
        background-color: ${props => props.theme.iconHoverBackground};
        cursor: pointer;
    }
`

export const PreviousImageContainer = styled(ImageContainer)`
    left: 0;
`


export const NextImageContainer = styled(ImageContainer)`
    right: 0;
`


export const PreviousImage = styled.img`
    height: auto;
    width: 24px;
    margin-right: 1px;
`

export const NextImage = styled(PreviousImage)`
    margin-left: 3px;
    margin-right: 0;
`

export const NoTasksPlaceholder = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    height: 245px;
`

export const DeleteImageContainer = styled(ImageContainer)`
    right: 150px;
    top: -15px;
`

export const DeleteEditImage = styled.img`
    height: auto;
    width: 24px;
`

export const EditImageContainer = styled(ImageContainer)`
    right: 50px;
    top: -15px;
`

