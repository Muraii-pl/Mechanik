import styled from "styled-components";

const StyledWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    background: url(${props => props.img});
    background-size:cover;
    background-repeat: no-repeat;
    background-position-x: 30%;
    position: relative;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: none;

    ::after{
        position:absolute;
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
    position: absolute;
    left: 40%;
    border-bottom: 100vh solid ${({theme}) => theme.primary};
    border-left: 25vw solid transparent;
    
    
    
`

const StyledMotto = styled.p `
    font-weight: bold;
    font-size: ${({theme})=>theme.font.size.m};
    width: 100%;
    top:23vh;
    left: 0;
    text-align: center;
    z-index: 1;

`

const StyledText = styled.p`
    font-weight: bold;
    font-family: ${({theme})=>theme.font.family.Raleway};
    font-size: ${({theme})=>theme.font.size.s};
    font-weight: 300;
    width: 60%;
    top:40vh;
    left: 20%;
    z-index: 1;
    text-align: center;

`
const ButtonWrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export {StyledWrapper,StyledTrapezoid,StyledMotto,StyledText,ButtonWrapper}