import React from 'react'
import '../styles/Button.css';

const Button = ({ style, text, link }) => {
    return (
        <a href={link} className={style} rel='noreferrer' target='_blank'>{ text }</a>
    )
}

export default Button;