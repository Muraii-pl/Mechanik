import React from 'react'
import Icon from '../Icon/Icon'
import {StyledText, StyledWrapper} from './priceListStyle'
import Wallet from '../assets/images/wallet.svg'
import Button from '../Button/buttonStyle'

const PriceList = () => {
    return (
        <StyledWrapper>
            <Icon src={Wallet}/>
            <StyledText>Z nami, Twoje pieniądze są bezpieczne.</StyledText>
            <Button>Cennik</Button>
        </StyledWrapper>
    )
}

export default PriceList
