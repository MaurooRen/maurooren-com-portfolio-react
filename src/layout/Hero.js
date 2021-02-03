import React from 'react'
import Button from '../components/Button';
import Icon from '../components/Icon';
import Emoji from '../components/Emoji';
import whetherCondition from '../constants/weather_conditions';
import '../styles/Hero.css';

const Hero = ({ weather }) => {
    
    //we use this function to chose the right emoji to display
    const weatherEmoji = (code) => {
        const emoji = whetherCondition.find(condition => condition.day === code)
        return emoji
    }

    return (
        <section className="Hero">
            <div className="container w-container">
                <h1>
                    <span>Hi! <Emoji symbol="👋" label="waving hand"/> I'm Mauricio,</span>
                    <span>a Colombian <strong>web developer</strong></span>
                    <span>currently enjoying the <Emoji symbol={weatherEmoji(weather).icon} label={weatherEmoji(weather).day}/> in Florida, USA.</span>
                </h1>
                <h2>I'm also a responsive web design aficionado, design-driven advocate, and an accessibility enthusiast.</h2>
                <div className='icons-block'>
                    <Button styleName='button-primary' text='Say Hello!' link='mailto:maurooren@gmail.com?subject=e.g.%20Fan%20Letter%2C%20Work%20Inquiry' />
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