import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {TileCardContainer, TileCardRow, TileTextContainer} from './styles'
import Loading from '../Loading'


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

const AddTaskButton = styled.button`
    background: ${props => props.theme.primaryBlue};
    height: 45px;
    width: 75px;
`

const LaunchDateStatusRow = styled(TileCardRow)`
    justify-content: space-between;
`


const TileCard = ({tasks, tile}) => {
    const [loading, setLoading] = useState(false)
    const [indexOfTaskToDisplay, setIndexOfTaskToDisplay] = useState(0)


    useEffect(() => {
        console.log(tasks)
    }, [])

    const handlePreviousTaskClick = () => {
        setIndexOfTaskToDisplay(indexOfTaskToDisplay - 1)
    }

    const handleNextTaskClick = () => {
        setIndexOfTaskToDisplay(indexOfTaskToDisplay + 1)
    }

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
                        <div onClick={handlePreviousTaskClick}>
                            {`<`}
                        </div>
                        <DescriptionContainer>
                            {tasks[indexOfTaskToDisplay].description}
                        </DescriptionContainer>
                        <div onClick={handleNextTaskClick}>
                            {`>`}
                        </div>
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
