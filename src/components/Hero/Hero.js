import React from 'react'
import { ButtonWrapper, StyledMotto, StyledText, StyledTrapezoid, StyledWrapper } from './heroStyle'
import HeroPhoto from '../assets/images/Hero-photoV2.png'
import ButtonS from '../Button/buttonStyle'
import styled from 'styled-components'

const ButtonHero = styled(ButtonS)`
    width:168px;
    height:52px;
    padding:10px 20px;
    margin-top:10px;
    cursor:pointer;
    font-weight: 700;
    letter-spacing: .1rem;

`


const Hero = () => {
    return (
        <StyledWrapper img={HeroPhoto}>    
            <StyledTrapezoid/>
            <StyledMotto>Tutaj nie ma miejsca na niedokręcone śruby.</StyledMotto>
            <StyledText>Sprawdż naszą ofertę diagnostyki, oraz napraw.</StyledText>
            <ButtonWrapper>
                <ButtonHero>Oferta</ButtonHero>
                <ButtonHero secondary>Kontakt</ButtonHero>
            </ButtonWrapper>

        </StyledWrapper>
    )
}

export default Hero
