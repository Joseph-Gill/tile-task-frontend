import React, {useEffect} from 'react'
import styled from 'styled-components'
import {BasePageContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
import {getTilesAction} from '../../store/tile/actions'
import TileCard from '../../components/TileCard'
import {PageTitle} from '../../style/titles'

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
                <>
                    <HeaderContainer>
                        <HeaderLowerBar />
                        <HeaderTitle>
                            <PageTitle>Tiles</PageTitle>
                        </HeaderTitle>
                        <HeaderLowerBar />
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
