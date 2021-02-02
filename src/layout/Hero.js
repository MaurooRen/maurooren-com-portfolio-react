import React from 'react'
import Button from '../components/Button';
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
                <div>
                    <Button style='button-primary' text='Say Hello!' link='mailto:maurooren@gmail.com?subject=e.g.%20Fan%20Letter%2C%20Work%20Inquiry' />
                    
                </div>
            </div>
        </section>
    )
}

export default Hero;