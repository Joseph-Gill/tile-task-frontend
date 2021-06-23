import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {TileCardContainer, TileCardRow, TileTextContainer} from './styles'
import Loading from '../Loading'
import previousTask from '../../assets/icons/scroll_left_icon.svg'
import nextTask from '../../assets/icons/scroll_right_icon.svg'
import {BaseButton} from '../../style/buttons'


const TaskNumberTypeRow = styled(TileCardRow)`
    justify-content: space-between;
`

const TitleContainer = styled(TileTextContainer)`
    height: 40px;
`

const DescriptionTaskToggleRow = styled(TileCardRow)`
    justify-content: space-evenly;
`

const DescriptionContainer = styled(TileTextContainer)`
    height: 100px;
`

const TileTaskDivider = styled.div`
    border-bottom: 2px solid ${props => props.theme.grayFour};
    height: 2px;
    width: 500px;
`

const TileButtonRow = styled(TileCardRow)`
    justify-content: flex-start;
    position: relative;
`

const AddTaskButton = styled(BaseButton)`
    background: ${props => props.theme.primaryBlue};
    height: 45px;
    width: 100px;
`

const LaunchDateStatusRow = styled(TileCardRow)`
    justify-content: space-between;
`

const PreviousNextImageContainer = styled.div`
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    height: 36px;
    position: relative;
    width: 36px;

    :hover {
        background-color: ${props => props.disableHover ? 'none' : props.theme.iconHoverBackground};
        cursor: ${props => props.disableHover ? 'default' : 'pointer'};
    }
`

const PreviousImage = styled.img`
    height: auto;
    left: 5px;
    position: absolute;
    width: 24px;
`

const NextImage = styled(PreviousImage)`
    left: 8px;
`


const TileCard = ({tasks, tile}) => {
    const [loading, setLoading] = useState(false)
    const [indexOfTaskToDisplay, setIndexOfTaskToDisplay] = useState(0)


    useEffect(() => {
        console.log(tasks)
    }, [])

    return (
        <TileCardContainer>
            {loading ? <Loading /> : (
                <>
                    <TaskNumberTypeRow>
                        <div>
                            {`Task #${indexOfTaskToDisplay + 1} of ${tasks.length}`}
                        </div>
                        <div>
                            {tasks[indexOfTaskToDisplay].type}
                        </div>
                    </TaskNumberTypeRow>
                    <TitleContainer>
                        {tasks[indexOfTaskToDisplay].title}
                    </TitleContainer>
                    <DescriptionTaskToggleRow>
                        <PreviousNextImageContainer
                            disableHover={!indexOfTaskToDisplay}
                            onClick={() => setIndexOfTaskToDisplay(indexOfTaskToDisplay - 1)}
                        >
                            <PreviousImage alt='previous task' hidden={!indexOfTaskToDisplay} src={previousTask} />
                        </PreviousNextImageContainer>
                        <DescriptionContainer>
                            {tasks[indexOfTaskToDisplay].description}
                        </DescriptionContainer>
                        <PreviousNextImageContainer
                            disableHover={indexOfTaskToDisplay === tasks.length - 1}
                            onClick={() => setIndexOfTaskToDisplay(indexOfTaskToDisplay + 1)}
                        >
                            <NextImage alt='next task' hidden={indexOfTaskToDisplay === tasks.length - 1} src={nextTask} />
                        </PreviousNextImageContainer>
                    </DescriptionTaskToggleRow>
                    <TileTaskDivider />
                    <TileButtonRow>
                        <AddTaskButton>
                            Add Task
                        </AddTaskButton>
                    </TileButtonRow>
                    <LaunchDateStatusRow>
                        <div>
                            {tile.launch_date}
                        </div>
                        <div>
                            {tile.status}
                        </div>
                    </LaunchDateStatusRow>
                </>)}
        </TileCardContainer>
    )
}

export default TileCard
