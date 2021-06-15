import styled from "styled-components";

const StyledWrapper = styled.div `
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({theme}) => theme.secondary};
    z-index:-1;
    box-shadow: 0px 15px 50px rgba(0,0,0,.8);
    
    
`

const StyledText = styled.p `
    width: 100%;
    font-weight: 600;
    text-align: center;
    margin-top: 2.5rem;
    font-size: ${({theme})=> theme.font.size.l};
`

export {StyledWrapper,StyledText}