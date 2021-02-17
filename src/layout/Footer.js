import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Icon from '../components/Icon'

const FooterStyled = styled.footer`
    border-top: 1px solid rgba(33, 38, 47, 0.2);

    .container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        padding: 7rem 0 5rem;
        text-align: center;
    }
    .container h3 {
        display: block;
        font-size: 4rem;
        font-weight: 900;
        line-height: 4rem;
        margin-bottom: 3rem;
    }
    .container p:nth-child(2) {
        display: block;
        margin: 0 auto 2rem;
        font-size: 1.6rem;
        font-weight: 600;
        width: 100%;
    }
    .container .icons-block .Icon {
        color: #666;
        margin-top: 3rem;
    }
    .container .howP:nth-child(5) {
        padding-top: 3rem;
        border-top: 1px dashed #CCC;
    }
    .container .howP:nth-child(5), .howP:nth-child(9) {
        margin-top: 3rem;
        font-weight: 600;
    }
    .container .howP {
        margin-bottom: 0.2rem;
        font-size: 1.2rem;
    }
    .container > .howP a {
        color: #FF0049;
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <div className="container w-container">
                <h3>Let's work together</h3>
                <p>If you are looking for a web developer or you have a website or mobile app idea in mind or you need some advice about web design, feel free to contact me.</p>
                <Button styleName='button-primary' text='maurooren@gmail.com' link='mailto:maurooren@gmail.com?subject=e.g.%20Fan%20Letter%2C%20Work%20Inquiry' />

                <div className='icons-block'>
                    <Icon size='large' icon='linkedin-in' link='https://www.linkedin.com/in/maurooren/' alt="LinkedIn" />
                    <Icon size='large' icon='github' link='https://github.com/maurooren' alt="GitHub" />
                    <Icon size='large' icon='dribbble' link='https://dribbble.com/maurooren' alt="Dribbble" />
                </div>

                <p className="howP">How this portfolio was build:</p>
                <p className="howP">Designed in <a rel='noreferrer' target='_blank' href="https://dribbble.com/shots/15052182-Personal-Portfolio-Website">Adobe XD</a></p>
                <p className="howP"><a rel='noreferrer' target='_blank' href="https://www.weatherapi.com/">WeatherAPI</a> use to show the current wheather in Miami</p>
                <p className="howP">Illustration from <a rel='noreferrer' target='_blank' href="https://blush.design/">Blush</a></p>
                <p className="howP">© 2021 All rights reserved. – <a rel='noreferrer' target='_blank' href="https://github.com/maurooren">Designed & Coded by MaurooRen</a></p>
            </div>
        </FooterStyled>
    )
}

export default Footer;