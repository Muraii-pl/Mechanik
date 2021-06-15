import styled from "styled-components";

const LogoText = styled.p `
    font-size: ${props => props.props ? ({theme}) => theme.font.size.xl :({theme}) => theme.font.size.l };
    padding:15px;
    font-weight:${props => props.props ? 700 : 400 }; ;
    text-align:center;
    filter:blur(0px);
    z-index: 9999;
`

export default LogoText