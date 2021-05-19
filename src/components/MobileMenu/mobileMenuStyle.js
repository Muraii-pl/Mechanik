import styled from "styled-components";

const StyledWrapper = styled.div`
 background-color: ${({theme}) => theme.primary};
 width: 100vw;
 height: 100vh;
 display:flex;
 justify-content: center;
 align-items: center;
 z-index: center;
 `

 const MenuLink = styled.p`
    
 `


export {StyledWrapper,MenuLink}
   