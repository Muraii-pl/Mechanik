import React from 'react'
import { StyledWrapper,Frame,StyledText,List,ListElement,ListElementContent,ListElementWrapper } from './contactStyle'
import Icon from '../Icon/Icon'
import email from '../assets/images/email.svg'
import telephone from '../assets/images/telephone.svg'
import adres from '../assets/images/adres.svg'

const Contact = () => {
    return (
        <StyledWrapper>
            <StyledText>Tu jesteśmy!</StyledText>
            <List>
                <ListElement>
                    <Icon src={adres} width={25}/>
                    <ListElementWrapper>
                        <ListElementContent>Nazwa Zakładu</ListElementContent>
                        <ListElementContent>ul. Mechaniczna 666</ListElementContent>
                        <ListElementContent>Suwałki 66-666</ListElementContent>
                    </ListElementWrapper>
                </ListElement>
                <ListElement>
                    <Icon src={telephone} width={25}/>
                    <ListElementWrapper>
                        <ListElementContent>Tel. 666-666-666</ListElementContent>
                        <ListElementContent>Tel2. 777-777-777</ListElementContent>
                    </ListElementWrapper>
                </ListElement>
                <ListElement>
                    <Icon src={email} width={25}/>
                    <ListElementWrapper>
                        <ListElementContent>kazik@naprawa.pl</ListElementContent>
                    </ListElementWrapper>
                </ListElement>
            </List>
            <Frame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312779.9431310756!2d20.781016711291045!3d52.232606289062204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1623759353228!5m2!1spl!2spl" allowfullscreen="" loading="lazy"></Frame>
        </StyledWrapper>
    )
}

export default Contact
