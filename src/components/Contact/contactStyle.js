import styled from "styled-components";

const StyledWrapper = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({theme}) => theme.primary};
    z-index:-1;
    box-shadow: 0px 15px 50px rgba(0,0,0,.8);
    padding: 2rem;

`
const Frame = styled.iframe`
    max-width: 75%;
    min-height: 50%;
    aspect-ratio: 1/1;
`
const StyledText = styled.p `
    font-weight: 700;
    text-align: center;
    font-size: ${({theme})=> theme.font.size.l};
`
const List = styled.ul`
    list-style: none;
    max-width: 75%;
    display: flex;
    flex-flow: column wrap;
`
const ListElement = styled.li `
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: .5rem 0;
    `
const ListElementWrapper = styled.div`
    display: flex;
    flex-flow: wrap column;
    margin-left: 3rem;
`
const ListElementContent = styled.p`
    padding: .1rem;
`

export {StyledWrapper,Frame,StyledText,List,ListElement,ListElementContent,ListElementWrapper}