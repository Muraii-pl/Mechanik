import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../assets/styles/GlobalStyle'
import SEO from '../../components/SEO/SEO'
import { theme } from '../assets/styles/theme'
import Header from '../Header/Header'


const MainTemplate = ({children}) => {
    return (
        <>
            <SEO/>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <>
                <Header/>
                {children}
                
                </>
            </ThemeProvider>
        </>
    )
}


export default MainTemplate

