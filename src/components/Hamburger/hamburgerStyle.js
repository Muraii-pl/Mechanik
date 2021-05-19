import styled from "styled-components";


const StyledHamburger = styled.button`
    border:none;
    background:none;
    padding:15px;
    z-index: 9999;
`

const InnerHamburger = styled.div`
    position:relative;
    width:28px;
    height:2px;
    border-radius:2px;
    background-color:${({theme,isOpen}) => isOpen ? 'transparent' : theme.white};
    transition: background-color .2s .25s ease-in-out;


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
        transform: translateY(${({isOpen}) => isOpen ? '8px': '0px' }) rotate(${({isOpen})=> isOpen ? '-315deg': '0'});
        transition:transform .2s 0.25s ease-in-out;
    }
    ::after{
        top:8px;
        transform: translateY(${({isOpen}) => isOpen ? '-8px':'0px' }) rotate(${({isOpen})=> isOpen ? '315deg': '0'});
        transition:transform .2s 0.25s ease-in-out;
    }

   
`

export {StyledHamburger,InnerHamburger}