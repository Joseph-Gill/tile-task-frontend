import React, {useEffect, useRef} from 'react'
import {ExternalModalContainer} from './styles'


const ModalExternalContainer = ({children, setModalView, showModalView}) => {
    //Ref used by external modal container to close if user clicks outside modal
    const node = useRef()

    // Handles closing the modal if the user clicks anywhere outside of the modal
    useEffect(() => {
        const handleClickOutside = e => {
            if (node.current === e.target) {
                setModalView(false);
            }
        }
        //Adds/Removes event listener for user clicking external container
        if (showModalView) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        //Cleans up event listener when modal is closed
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [setModalView, showModalView])

    return (
        <ExternalModalContainer ref={node}>
            {children}
        </ExternalModalContainer>
    )
}

export default ModalExternalContainer
