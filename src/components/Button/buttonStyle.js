import styled from "styled-components";

const ButtonS = styled.button`
    width: 215px;
    height: 65px;
    padding:12px 48px;
    z-index: 3;
    border: 4px solid ${({theme})=> theme.quaternary};
    background-color:${({theme,secondary}) => secondary ? theme.quaternary : 'transparent'} ;
    cursor: pointer;
    color: ${({theme,secondary}) => secondary ? theme.black : theme.white};
    font-size: ${({theme})=> theme.font.size.m};
    border-radius: 30px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: .2rem;


`

export default ButtonS