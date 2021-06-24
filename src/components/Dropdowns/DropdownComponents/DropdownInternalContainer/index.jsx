import React, {useRef, useEffect} from 'react'
import {DropdownContainer} from './styles'


const DropdownInternalContainer = ({children, setDropdownView, showDropdownView}) => {
    //Ref used to close the dropdown if user clicks outside of the dropdown internal area
    const node = useRef()

    useEffect(() => {
        const handleClickOutside = e => {
            if (!node.current.contains(e.target)) {
                setDropdownView(false)
            }
        }
        //Adds/Removes event listener for user clicking outside of the dropdown content
        if (showDropdownView) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        //Cleans up event listener when dropdown is closed
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })

    return (
        <DropdownContainer ref={node}>
            {children}
        </DropdownContainer>
    )
}

export default DropdownInternalContainer
