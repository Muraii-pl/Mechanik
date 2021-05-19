import styled from "styled-components";

const LogoText = styled.p `
    font-size: ${({theme}) => theme.font.size.m};
    padding:15px;
    text-align:center;
    filter:blur(0px);
    z-index: 9999;
`

export default LogoText