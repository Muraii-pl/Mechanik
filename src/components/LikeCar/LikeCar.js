import React from 'react'
import Icon from '../Icon/Icon'
import {StyledText, StyledWrapper} from './likeCarStyle'
import Audi from '../assets/images/audi.svg'
import Volkswagen from '../assets/images/volkswagen.svg'

const LikeCar = () => {
    return (
        <StyledWrapper>
            <StyledText>Te auta bardzo lubimy naprawiać!</StyledText>
            <Icon src={Audi} width={250}/>
            <Icon src={Volkswagen} width={175}/>
        </StyledWrapper>

    )
}

export default LikeCar
