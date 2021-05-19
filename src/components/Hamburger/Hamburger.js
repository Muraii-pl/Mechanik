import React from 'react'
import { StyledHamburger,InnerHamburger } from './hamburgerStyle'
const Hamburger = ({isOpen,...props}) => {
    return (
        <StyledHamburger {...props}>
            <InnerHamburger isOpen={isOpen}/>
        </StyledHamburger>
    )
}

export default Hamburger
