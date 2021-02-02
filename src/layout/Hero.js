import React from 'react'
import Button from '../components/Button';
import Icon from '../components/Icon';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="Hero">
            <div className="container w-container">
                <h1>
                    <span>Hi! <i className="icon">👋</i> I'm Mauricio,</span>
                    <span>a Colombian <strong>web developer</strong></span>
                    <span>currently enjoying the <i className="icon">🌞</i> in Florida, USA.</span>
                </h1>
                <h2>I'm also a responsive web design aficionado, design-driven advocate, and an accessibility enthusiast.</h2>
                <div className='icons-block'>
                    <Button style='button-primary' text='Say Hello!' link='mailto:maurooren@gmail.com?subject=e.g.%20Fan%20Letter%2C%20Work%20Inquiry' />
                    <Icon size='large' icon='github' link='#' alt="GitHub" />
                    <Icon size='large' icon='codepen' link='#' alt="CodePen" />
                    <Icon size='large' icon='medium-m' link='#' alt="Medium" />
                    <Icon size='large' icon='instagram' link='#' alt="Instagram" />
                    <Icon size='large' icon='linkedin-in' link='#' alt="LinkedIn" />
                </div>
            </div>
        </section>
    )
}

export default Hero;