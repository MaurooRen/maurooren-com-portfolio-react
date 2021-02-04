import React from 'react'
import Button from '../components/Button'
import Icon from '../components/Icon'
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="container w-container">
                <h3>Let's work together</h3>
                <p>If you are looking for a web developer or you have a website or mobile app idea in mind or you need some advice about web design, feel free to contact me.</p>
                <Button styleName='button-primary' text='maurooren@gmail.com' link='mailto:maurooren@gmail.com?subject=e.g.%20Fan%20Letter%2C%20Work%20Inquiry' />

                <div className='icons-block'>
                    <Icon icon='github' link='#' alt="GitHub" />
                    <Icon icon='codepen' link='#' alt="CodePen" />
                    <Icon icon='medium-m' link='#' alt="Medium" />
                    <Icon icon='instagram' link='#' alt="Instagram" />
                    <Icon icon='linkedin-in' link='#' alt="LinkedIn" />
                </div>

                <p className="howP">How this portfolio was build:</p>
                <p className="howP">Designed in <a rel='noreferrer' target='_blank' href="https://dribbble.com/shots/15052182-Personal-Portfolio-Website">Adobe XD</a></p>
                <p className="howP">React and CSS</p>
                <p className="howP"><a rel='noreferrer' target='_blank' href="https://www.npmjs.com/package/normalize.css">Normalize.css</a> to reset browser CSS styles</p>
                <p className="howP"><a rel='noreferrer' target='_blank' href="https://www.weatherapi.com/">WeatherAPI</a> use to show the current wheather in Miami</p>
                <p className="howP">Illustration from <a rel='noreferrer' target='_blank' href="https://blush.design/">Blush</a></p>
                <p className="howP">© 2021 All rights reserved. – <a rel='noreferrer' target='_blank' href="http://maurooren.com/">Designed & Coded by MaurooRen</a></p>
            </div>
        </footer>
    )
}

export default Footer;