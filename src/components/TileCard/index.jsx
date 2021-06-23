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


const TileCard = ({tile}) => {
    const [tasksToDisplay, setTasksToDisplay] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

    }, [])

    return (
        <TileCardContainer>
            {loading ? <Loading /> : (
                <>
                    <TaskNumberTypeRow>
                        <div>
                            Task# 1 of 2
                        </div>
                        <div>
                            Type
                        </div>
                    </TaskNumberTypeRow>
                    <TitleContainer>
                        Title
                    </TitleContainer>
                    <DescriptionTaskToggleRow>
                        <div>
                            {`<`}
                        </div>
                        <DescriptionContainer>
                            Description
                        </DescriptionContainer>
                        <div>
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
                            Launch Date
                        </div>
                        <div>
                            Status
                        </div>
                    </LaunchDateStatusRow>
                </>)}
        </TileCardContainer>
    )
}

export default TileCard
