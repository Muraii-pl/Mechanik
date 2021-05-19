import React, { useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'
import Logo from '../Logo/Logo'
import MobileMenu from '../MobileMenu/MobileMenu'
import { StyledWrapper } from './headerStyle'








const Header = () => {
    const [isMenuOpen,setMenuState] = useState(false)

    const toogleMobileMenu = () => {
        setMenuState(!isMenuOpen)
    }
    return (
        <StyledWrapper>
                 <Logo/>
                 <Hamburger onClick={toogleMobileMenu} isOpen={isMenuOpen}/>
                 <MobileMenu isOpen={isMenuOpen}/>
        </StyledWrapper>
    )
}

export default Header
