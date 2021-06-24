import React, {useEffect, useState} from 'react'
import Loading from '../../components/Loading'
import TileCard from '../../components/TileCard'
import AddTileModal from '../../components/Modals/AddTileModal'
import {useDispatch, useSelector} from 'react-redux'
import {getTilesAction} from '../../store/tile/actions'
import {PageTitle} from '../../style/titles'
import {BasePageContainer} from '../../style/containers'
import {AddTileButton, FilterLabel, FilterTilesSelect, HeaderContainer, HeaderLowerBar, HeaderTitle, NoTilesToDisplayContainer, TilesContainer} from './styles'


const TilesView = () => {
    const dispatch = useDispatch()
    const tiles = useSelector(state => state.tileReducer.tiles)
    const loaded = useSelector(state => state.tileReducer.loaded)
    const [showAddTileModal, setShowAddTileModal] = useState(false)
    const [statusFilter, setStatusFilter] = useState('')

    useEffect(() => {
        dispatch(getTilesAction())
    }, [])

    const renderTiles = () => {
        if (!tiles.length) {
            return (
                <NoTilesToDisplayContainer>
                    No Tiles to Display
                </NoTilesToDisplayContainer>
            )
        }
        if (!statusFilter) {
            return tiles.map(tile => <TileCard key={tile.id} tasks={tile.tasks} tile={tile} />)
        } else {
            const filteredTiles = tiles.filter(tile => tile.status === statusFilter)
            if (!filteredTiles.length) {
                return (
                    <NoTilesToDisplayContainer>
                        No Tiles with this Status
                    </NoTilesToDisplayContainer>
                )
            } else {
                return filteredTiles.map(tile => <TileCard key={tile.id} tasks={tile.tasks} tile={tile} />)
            }
        }
    }

    return (
        <BasePageContainer>
            {showAddTileModal &&
                <AddTileModal
                    setShowAddTileModal={setShowAddTileModal}
                    showAddTileModal={showAddTileModal}
                />}
            {!loaded ? <Loading /> : (
                <>
                    <HeaderContainer>
                        <FilterLabel>Status</FilterLabel>
                        <FilterTilesSelect
                            onChange={(e) => setStatusFilter(e.target.value)}
                            value={statusFilter}
                        >
                            <option value=''>All</option>
                            <option value='ARCHIVED'>Archived</option>
                            <option value='LIVE'>Live</option>
                            <option value='PENDING'>Pending</option>
                        </FilterTilesSelect>
                        <HeaderLowerBar />
                        <HeaderTitle>
                            <PageTitle>Tiles</PageTitle>
                        </HeaderTitle>
                        <HeaderLowerBar />
                        <AddTileButton onClick={() => setShowAddTileModal(true)}>Add Tile</AddTileButton>
                    </HeaderContainer>
                    <TilesContainer>
                        {renderTiles()}
                    </TilesContainer>
                </>
            )}
        </BasePageContainer>
    )
}

export default TilesView
