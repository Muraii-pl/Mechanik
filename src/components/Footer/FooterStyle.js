import styled from "styled-components";

const StyledWrapper = styled.footer`
    max-width: 100vw;
    height: 25vh;
    background-color: ${({theme}) => theme.secondary};
    display: flex;
    flex-wrap: row wrap;
    justify-content: space-around;
    align-items: center;
`
const FooterMenu =styled.div `
    display: none;
`
const SocialMedia = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
    
`
const FooterText = styled.p`
    font-weight: 600;
    flex-shrink: 0;
    flex-grow: 1;
    width: 100%;
    text-align: center;
`

export {StyledWrapper,FooterMenu,SocialMedia,FooterText}