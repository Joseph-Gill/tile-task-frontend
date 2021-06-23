import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import TileCard from '../../components/TileCard'
import AddTileModal from '../../components/Modals/AddTileModal'
import {useDispatch, useSelector} from 'react-redux'
import {getTilesAction} from '../../store/tile/actions'
import {PageTitle} from '../../style/titles'
import {BaseButton} from '../../style/buttons'
import {BasePageContainer} from '../../style/containers'

const TilesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`

const HeaderContainer = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 20px;
    margin-top: 100px;
    width: 1020px;
`

const HeaderLowerBar = styled.div`
    border-bottom: 2px solid ${props => props.theme.grayFour};
    width: 45%;
`

const HeaderTitle = styled.div`
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

const TilesView = () => {
    const dispatch = useDispatch()
    const tiles = useSelector(state => state.tileReducer.tiles)
    const loaded = useSelector(state => state.tileReducer.loaded)
    const [showAddTileModal, setShowAddTileModal] = useState(false)

    useEffect(() => {
        dispatch(getTilesAction())
    }, [])

    return (
        <BasePageContainer>
            {showAddTileModal &&
                <AddTileModal
                    setShowAddTileModal={setShowAddTileModal}
                    showAddTileModal={showAddTileModal}
                />}
            {loaded && (
                <>
                    <HeaderContainer>
                        <HeaderLowerBar />
                        <HeaderTitle>
                            <PageTitle>Tiles</PageTitle>
                        </HeaderTitle>
                        <HeaderLowerBar />
                        <AddTileButton onClick={() => setShowAddTileModal(true)}>Add Tile</AddTileButton>
                    </HeaderContainer>
                    <TilesContainer>
                        {tiles.map(tile => <TileCard key={tile.id} tasks={tile.tasks} tile={tile} />)}
                    </TilesContainer>
                </>
            )}
        </BasePageContainer>
    )
}

export default TilesView
