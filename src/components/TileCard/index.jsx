import React, {useState} from 'react'
import styled from 'styled-components'
import Loading from '../Loading'
import AddTaskModal from '../Modals/AddTaskModal'
import {createDateInfo} from '../../helpers'
import previousTask from '../../assets/icons/scroll_left_icon.svg'
import nextTask from '../../assets/icons/scroll_right_icon.svg'
import {AddTaskButton, CreatedDateRow, DescriptionContainer, DescriptionTaskToggleRow, LaunchDateStatusRow, NextImage,
    NextImageContainer, PreviousImage, PreviousImageContainer, TaskNumberTypeRow, TileButtonRow, TileCardContainer,
    TileTaskDivider, TitleContainer} from './styles'


const TileCard = ({tasks, tile}) => {
    const [loading, setLoading] = useState(false)
    const [indexOfTaskToDisplay, setIndexOfTaskToDisplay] = useState(0)
    const [showAddTaskModal, setShowAddTaskModal] = useState(false)

    return (
        <TileCardContainer>
            {showAddTaskModal &&
                <AddTaskModal
                    setShowAddTaskModal={setShowAddTaskModal}
                    showAddTaskModal={showAddTaskModal}
                    tileId={tile.id}
                />}
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
                        {indexOfTaskToDisplay > 0 && (
                            <PreviousImageContainer onClick={() => setIndexOfTaskToDisplay(indexOfTaskToDisplay - 1)}>
                                <PreviousImage alt='previous task' src={previousTask} />
                            </PreviousImageContainer>)}
                        <DescriptionContainer>
                            {tasks[indexOfTaskToDisplay].description}
                        </DescriptionContainer>
                        {indexOfTaskToDisplay < tasks.length - 1 && (
                            <NextImageContainer onClick={() => setIndexOfTaskToDisplay(indexOfTaskToDisplay + 1)}>
                                <NextImage alt='next task' src={nextTask} />
                            </NextImageContainer>)}
                    </DescriptionTaskToggleRow>
                    <CreatedDateRow>
                        <div>
                            {createDateInfo(tasks[indexOfTaskToDisplay].created)}
                        </div>
                    </CreatedDateRow>
                    <TileTaskDivider />
                    <TileButtonRow>
                        <AddTaskButton onClick={() => setShowAddTaskModal(true)}>
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
