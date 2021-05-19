import styled from "styled-components";

const StyledWrapper = styled.div`
 background-color: ${({theme}) => theme.primary};
 width: 100vw;
 height: 100vh;
 display:flex;
 justify-content: space-evenly;
 align-items: center;
 z-index: 9998;
 flex-direction: column;
 position: fixed;
 top:0;
 left:0;
 transform: translateX(${({isOpen})=> isOpen ? '0' : '-100%'});
 transition: transform .5s ease-in-out;
 `

 const MenuLink = styled.p`
    font-size:${({theme})=> theme.font.size.l};
    margin-left: 15px;

 `
const MenuItem = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    opacity:${({isOpen})=> isOpen ? '1' : '0'};
    transition: opacity .25s .50s ease-in-out;
    
`


export {StyledWrapper,MenuLink,MenuItem}
   