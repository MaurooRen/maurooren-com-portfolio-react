import React from 'react'
import styled from 'styled-components'
import illustration from '../assets/illustrations/clumsy.svg';

const AboutSection = styled.section`
    background-color: #F9F9F9;

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 7rem 0 5rem;
    }
    .container div {
        width: 60%;
    }
    .container img {
        width: 40%;
    }
    .container div h3 {
        width: 100%;
        font-size: 4rem;
        font-weight: 900;
        text-align: left;
        line-height: 5rem;
        margin-bottom: 3rem;
    }
    .container div p {
        color: #888;
        margin-bottom: 2rem;
        font-size: 1.6rem;
        font-weight: 400;
        text-align: left;
    }
`;

const AboutMe = () => {
    return (
        <AboutSection>
            <div className="container w-container">
                <div>
                    <h3>Intersection of design, business and marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img src={illustration} alt="Illustration of a person floating around papers sheets" />
            </div>
        </AboutSection>
    )
}

export default AboutMe;