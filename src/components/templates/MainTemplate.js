import React from 'react'
import { ThemeProvider } from 'styled-components'
import SEO from '../../components/SEO/SEO'
import { theme } from '../assets/styles/theme'

const MainTemplate = ({children}) => {
    return (
        <>
            <SEO/>
            <ThemeProvider theme={theme}>
                <>
                {/* <Header/> */}
                {children}
                
                </>
            </ThemeProvider>
        </>
    )
}


export default MainTemplate

