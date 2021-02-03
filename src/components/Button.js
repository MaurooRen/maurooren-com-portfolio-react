import React from 'react'
import '../styles/Button.css';

const Button = ({ styleName, text, link }) => {
    return (
        <a href={link} className={styleName} rel='noreferrer' target='_blank'>{ text }</a>
    )
}

export default Button;