import React from 'react'
import './cssStyle.css';
const AboutPage = () => {
    //inline style
    const textStyle = {
        fontSize: "50px"
    }
    return (
        <p style={textStyle}>
            About Page
        </p>
    )
}

export default AboutPage
