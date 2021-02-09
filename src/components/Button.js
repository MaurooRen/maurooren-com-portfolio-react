import React from 'react'
import styled from 'styled-components'

const ButtonLink = styled.a`
    display: inline-block;
    padding: 16px 50px;
    border-radius: 0px;
    background-color: #FF0049;
    -webkit-transition: all 800ms ease;
    transition: all 800ms ease;
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    letter-spacing: 0.8px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgb(255 0 73 / 10%);
        -webkit-transform: scale(1.05) translate(0px, -4px);
        -ms-transform: scale(1.05) translate(0px, -4px);
        transform: scale(1.05) translate(0px, -4px);
    }
`;

const Button = ({ styleName, text, link, primary }) => {
    console.log(primary)
    return (
        <ButtonLink href={link} rel='noreferrer' target='_blank'>{ text }</ButtonLink>
    )
}

export default Button;