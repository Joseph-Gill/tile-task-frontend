import React, {useEffect} from 'react'
import styled from 'styled-components'
import {BasePageContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
import {getTilesAction} from '../../store/tile/actions'

const TilesContainer = styled.div`
    background: ${props => props.theme.white};
    height: 750px;
    width: 750px;
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
                    {console.log(tiles)}
                </TilesContainer>
            )}
        </BasePageContainer>
    )
}

export default TilesView
