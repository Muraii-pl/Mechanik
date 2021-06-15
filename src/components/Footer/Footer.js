import React from 'react'
import Logo from '../Logo/Logo'
import { StyledWrapper,FooterMenu,SocialMedia,FooterText } from './FooterStyle'
import Icon from '../Icon/Icon'
import facebook from '../assets/images/facebook-icon.svg'
import instagram from '../assets/images/instagram-icon.svg'
const Footer = () => {
    return (
        <StyledWrapper>
            <Logo value="main"/>
            <FooterMenu>
                <FooterText>Skontaktuj się z nami</FooterText>
                    <ul>
                        <li>Zapytaj o oferte</li>
                        <li>Sprawdz Opinie</li>
                        <li>Zadzwoń lub napisz</li>
                    </ul>
            </FooterMenu>
            <SocialMedia>
                <FooterText>Social Media</FooterText>
                <Icon src={instagram} width={50}/>
                <Icon src={facebook}/>
            </SocialMedia>
        </StyledWrapper>
    )
}

export default Footer
