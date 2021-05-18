import React from 'react'
import Hamburger from '../Hamburger/Hamburger'
import Logo from '../Logo/Logo'
import { StyledWrapper } from './headerStyle'








const Header = () => {
    return (
        <StyledWrapper>
            <Logo/>
            <Hamburger/>
        </StyledWrapper>
    )
}

export default Header
