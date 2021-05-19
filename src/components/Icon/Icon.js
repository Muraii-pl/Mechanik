import React from 'react'
import SVG from 'react-inlinesvg'

const Icon = ({src,width, ...props}) => {
    return (
        <div {...props}>
            <SVG src={src} width={width}/>
        </div>
    )
}

export default Icon
