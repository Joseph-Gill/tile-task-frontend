import React, {useState} from 'react'
import AddTaskModal from '../Modals/AddTaskModal'
import DeleteItemDropdown from '../Dropdowns/DeleteItemDropdown'
import {createDateInfo} from '../../helpers'
import nextTask from '../../assets/icons/scroll_right_icon.svg'
import previousTask from '../../assets/icons/scroll_left_icon.svg'
import {AddTaskButton, CreatedDateRow, DeleteImageContainer, DescriptionContainer, DescriptionTaskToggleRow, EditImageContainer, LaunchDateStatusRow, NextImage,
    NextImageContainer, NoTasksPlaceholder, PreviousImage, PreviousImageContainer, TaskNumberTypeRow, TileButtonRow, TileCardContainer,
    TileTaskDivider, TitleContainer} from './styles'
import EditItemDropdown from '../Dropdowns/EditItemDropdown'


const TileCard = ({tasks, tile}) => {
    const [indexOfTaskToDisplay, setIndexOfTaskToDisplay] = useState(0)
    const [showAddTaskModal, setShowAddTaskModal] = useState(false)
    const [showDeleteDropdown, setShowDeleteDropdown] = useState(false)
    const [showEditDropdown, setShowEditDropdown] = useState(false)

    return (
        <TileCardContainer>
            {showAddTaskModal &&
                <AddTaskModal
                    setShowAddTaskModal={setShowAddTaskModal}
                    showAddTaskModal={showAddTaskModal}
                    tileId={tile.id}
                />}
            {tasks.length ? (
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
                </>) : (
                    <NoTasksPlaceholder>No Tasks to Display</NoTasksPlaceholder>)}
            <TileTaskDivider />
            <TileButtonRow>
                <AddTaskButton onClick={() => setShowAddTaskModal(true)}>
                    Add Task
                </AddTaskButton>
                <DeleteImageContainer>
                    <DeleteItemDropdown
                        setIndexOfTaskToDisplay={setIndexOfTaskToDisplay}
                        setShowDeleteDropdown={setShowDeleteDropdown}
                        showDeleteDropdown={showDeleteDropdown}
                        taskId={tasks[indexOfTaskToDisplay]?.id}
                        tileId={tile.id}
                    />
                </DeleteImageContainer>
                <EditImageContainer>
                    <EditItemDropdown
                        setShowEditDropdown={setShowEditDropdown}
                        showEditDropdown={showEditDropdown}
                        task={tasks[indexOfTaskToDisplay]}
                        tile={tile}
                    />
                </EditImageContainer>
            </TileButtonRow>
            <LaunchDateStatusRow>
                <div>
                    {tile.launch_date}
                </div>
                <div>
                    {tile.status}
                </div>
            </LaunchDateStatusRow>
        </TileCardContainer>
    )
}

export default TileCard
