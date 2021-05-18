import styled from "styled-components";

const StyledHamburger = styled.button`
    border:none;
    background:none;
    padding:15px;
`

const InnerHamburger = styled.div`
    position:relative;
    width:28px;
    height:2px;
    border-radius:2px;
    background-color:${({theme}) => theme.white};


    ::after,::before{
        content:'';
        position:absolute;
        width:28px;
        left:0;
        height:2px;
        border-radius:2px;
        background-color:${({theme}) => theme.white};
    }
    ::before{
        top:-8px;
    }
    ::after{
        top:8px;
    }

   
`

export {StyledHamburger,InnerHamburger}