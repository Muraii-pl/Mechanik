import React from 'react'
import { StyledTrapezoid, StyledWrapper } from './heroStyle'
import HeroPhoto from '../assets/images/Hero-photoV2.png'



const Hero = () => {
    return (
        <StyledWrapper img={HeroPhoto}>    
            <StyledTrapezoid/>
        </StyledWrapper>
    )
}

export default Hero
