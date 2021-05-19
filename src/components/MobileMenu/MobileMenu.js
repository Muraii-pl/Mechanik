import React from 'react'
import { MenuLink, StyledWrapper, MenuItem } from './mobileMenuStyle'
import Cennik from '../assets/images/cennik-icon.svg'
import Oferta from '../assets/images/oferta-icon.svg'
import Opinie from '../assets/images/opinie-icon.svg'
import Kontakt from '../assets/images/kontakt-icon.svg'
import Icon from '../Icon/Icon'



const MobileMenu = ({isOpen}) => {
    const menuItems = [
        Oferta,
        Cennik,
        Opinie,
        Kontakt
    ]
    const menuItemsName = [
        'Oferta',
        'Cennik',
        'Opinie',
        'Kontakt'
    ]
    console.log(isOpen)
    return (
       
        <StyledWrapper isOpen={isOpen}>
            {menuItems.map((item,index)=> (
                (<MenuItem isOpen={isOpen} key={item}><Icon src={item} /><MenuLink>{menuItemsName[index]}</MenuLink></MenuItem>)
        ))}
        </StyledWrapper>
    )
}

export default MobileMenu
