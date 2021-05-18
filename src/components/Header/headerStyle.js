import styled from 'styled-components'

const StyledWrapper = styled.nav`
display:flex;
width:100%;
height:80px;
justify-content:space-between;
align-self: flex-start;
align-items:center;
background-color : ${({theme}) => theme.secondary};
color: ${({theme}) => theme.white};

`
 export { StyledWrapper }

 