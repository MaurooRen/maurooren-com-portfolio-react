import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button';
import Icon from '../components/Icon';
import Emoji from '../components/Emoji';
import whetherCondition from '../constants/weather_conditions';

const HeroStyled = styled.section`
    .container {
        align-items: center;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        height: calc(100vh - 101px);
        min-height: 400px;
    }
    .container > h1, h2  {
        width: 100%;
        font-size: 4rem;
        font-weight: 100;
        text-align: justify;
        line-height: 5rem;
    }
    .container > h1 i, h3 i {
        font-style: normal;
    }
    .container h1 strong {
        font-weight: 400;
    }
    .container h1 span:nth-child(1) {
        margin-right: 1rem;
        font-weight: 600;
    }
    .container h1 span:nth-child(2) {
        margin-right: 1rem;
    }
    .container h1 span:nth-child(3) {
        margin-right: 1rem;
    }
    .container h1 span:nth-child(4) {
        margin-right: 1rem;
    }
    .container .icons-block {
        margin-top: 4rem;
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        width: 100%;
    }

    // X-Small devices (portrait phones, less than 576px)
    @media (min-width: 1px) {
        .container * {
            display: inline;
        }
        .container > h1, h2  {
            font-size: 2.5rem;
            text-align: left;
            line-height: 3.5rem;
        }
        .container h2  {
            margin-top: 0.5rem;
            font-size: 1.8rem;
            line-height: 3rem;
        }  
        .container .icons-block a:nth-child(1) {
            display: none;
        }
        .container .icons-block > a:nth-child(2) svg, a:nth-child(3) svg, a:nth-child(4) svg, a:nth-child(5) svg, a:nth-child(6) svg {
            padding-left: 0 !important;
            padding-right: 25px !important;
        }
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        .container > h1, h2  {
            font-size: 2.8rem;
            line-height: 3.5rem;
        }
        .container h1 span {
            display: inline-block;
        }
        .container h1 span:nth-child(2) {
            display: inline;
        }
        .container h1 span strong {
            display: inline;
        }

        .container h2  {
            font-size: 2rem;
            line-height: 3rem;
        }

        .container .icons-block a:nth-child(1) {
            display: inline-block;
        }
        .container .icons-block > a:nth-child(2) svg, a:nth-child(3) svg, a:nth-child(4) svg, a:nth-child(5) svg, a:nth-child(6) svg {
            padding-left: 25px !important;
            padding-right: 0 !important;
        }
        
    }

        // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        .container * {
            display: inline-block;
        }
        .container > h1, h2  {
            font-size: 2.8rem;
            line-height: 4rem;
        }
        .container h2  {
            margin-top: 0.5rem;
            font-size: 2rem;
        }    
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        .container > h1, h2  {
            font-size: 3.8rem;
            text-align: justify;
            line-height: 4.5rem;
        }
        .container h2  {
            margin-top: 0.5rem;
            font-size: 2.2rem;
        }
    }        

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        .container > h1, h2  {
            font-size: 4rem;
            line-height: 5rem;
        }
        .container h2  {
            font-size: 2.5rem;
            line-height: 3.5rem;
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
    }
`;

const Hero = ({ weather }) => {
    
    //we use this function to chose the right emoji to display
    const weatherEmoji = (weatherCode) => {
        const emoji = whetherCondition.find(condition => condition.day === weatherCode)
        return emoji
    }

    console.log('I am a Heroe', weatherEmoji(weather)) //Debbuging for wrong weatherCode

    return (
        <HeroStyled>
            <div className="container w-container">
                <h1>
                    <span>Hi! <Emoji symbol="👋" label="waving hand"/> I'm Mauricio,</span>
                    <span>a Colombian <strong>front end web developer</strong></span>
                    <span>currently enjoying the <Emoji symbol={weatherEmoji(weather).icon} label={weatherEmoji(weather).day}/> in Florida, USA.</span>
                </h1>
                <h2>I'm also a responsive web design aficionado, design-driven advocate, and an accessibility enthusiast.</h2>
                <div className='icons-block'>
                    <Button text='Say Hello!' link='mailto:maurooren@gmail.com?subject=e.g.%20Fan%20Letter%2C%20Work%20Inquiry' primary="true" />
                    <Icon size='large' icon='linkedin-in' link='https://www.linkedin.com/in/maurooren/' alt="LinkedIn" />
                    <Icon size='large' icon='github' link='https://github.com/maurooren' alt="GitHub" />
                    {/* <Icon size='large' icon='codepen' link='https://codepen.io/maurooren' alt="CodePen" /> */}
                    <Icon size='large' icon='dribbble' link='https://dribbble.com/maurooren' alt="Dribbble" />
                    {/* <Icon size='large' icon='medium-m' link='https://maurooren.medium.com/' alt="Medium" /> */}
                </div>
            </div>
        </HeroStyled>
    )
}

export default Hero;