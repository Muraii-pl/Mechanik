import React from 'react'
import { MenuLink, StyledWrapper } from './mobileMenuStyle'

const menuItems = [
    'Oferta',
    'Cennik',
    'Opinie',
    'Kontakt'
]

const MobileMenu = () => {
    return (
        <StyledWrapper>
            {menuItems.map(item => {
                (<MenuLink key={item}>{item}</MenuLink>)
            })}
        </StyledWrapper>
    )
}

export default MobileMenu
