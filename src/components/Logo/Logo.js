import React from 'react'
import LogoText from './logoStyle'

const Logo = props => {
    const {value} = props
    return (
        <LogoText props={value} >
            Logo
        </LogoText>
    )
}

export default Logo
