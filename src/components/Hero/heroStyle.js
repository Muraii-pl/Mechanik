import styled from "styled-components";

const StyledWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    background: url(${props => props.img});
    background-size:cover;
    background-repeat: no-repeat;
    background-position-x: 30%;
    position: relative;

    ::after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color:rgba(0,0,0,.6);
    }
   
`
const StyledTrapezoid = styled.div `
    width: 60%;
    height: 0px;
    position: relative;
    left: 40%;
    border-bottom: 100vh solid ${({theme}) => theme.primary};
    border-left: 25vw solid transparent;
    
`
export {StyledWrapper,StyledTrapezoid}