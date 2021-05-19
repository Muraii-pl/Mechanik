import React from 'react'
import Icon from '../Icon/Icon'
import {StyledText, StyledWrapper} from './opinionStyle'
import Hands from '../assets/images/hands.svg'
import Button from '../Button/buttonStyle'




const Opinion = () => {
    return (
        <StyledWrapper>
            <Icon src={Hands} width={250}/>
            <StyledText>Z nami, Twoje pieniądze są bezpieczne.</StyledText>
            <Button>Cennik</Button>
        </StyledWrapper>
    )
}

export default Opinion
