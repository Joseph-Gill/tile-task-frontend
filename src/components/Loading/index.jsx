import React from 'react'
import {LoadingContainer} from './styles'
import './styles.css'


const Loading = () => {
    return (
        <LoadingContainer>
            <div className='lds-ellipsis'>
                <div />
                <div />
                <div />
                <div />
            </div>
        </LoadingContainer>
    )
}

export default Loading
