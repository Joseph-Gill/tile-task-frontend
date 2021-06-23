import React, {useEffect} from 'react'
import styled from 'styled-components'
import {BasePageContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
import {getTilesAction} from '../../store/tile/actions'
import TileCard from '../../components/TileCard'

const TilesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`


const TilesView = () => {
    const dispatch = useDispatch()
    const tiles = useSelector(state => state.tileReducer.tiles)
    const loaded = useSelector(state => state.tileReducer.loaded)

    useEffect(() => {
        dispatch(getTilesAction())
    }, [])

    return (
        <BasePageContainer>
            {loaded && (
                <TilesContainer>
                    {tiles.map(tile => <TileCard key={tile.id} tasks={tile.tasks} tile={tile} />)}
                </TilesContainer>
            )}
        </BasePageContainer>
    )
}

export default TilesView
