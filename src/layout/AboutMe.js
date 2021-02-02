import React from 'react'
import '../styles/AboutMe.css';
import illustration from '../assets/illustrations/clumsy.svg';

const AboutMe = () => {

    return (
        <section className="AboutMe">
            <div className="container w-container">
                <div>
                    <h3>Intersection of design, business and marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img src={illustration} alt="Illustration of a person floating around papers sheets" />
            </div>
        </section>
    )
}

export default AboutMe;