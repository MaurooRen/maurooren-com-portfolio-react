import React from 'react'
import styled from 'styled-components'
import illustration from '../assets/illustrations/clumsy.svg';

const AboutSection = styled.section`
    background-color: #F9F9F9;

    .container {
        display: flex;
        padding: 7rem 0 5rem;
    }
    .container div h3 {
        width: 100%;
        font-weight: 900;
        text-align: left;
        margin-bottom: 3rem;
    }
    .container div p {
        color: #888;
        font-weight: 400;
        margin-bottom: 2rem;
        text-align: left;
    }

    // X-Small devices (portrait phones, less than 576px)
    @media (min-width: 1px) {
        .container {
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
        .container div {
            width: 100%;
        }
        .container img {
            margin-top: 2em;
            width: 80%;
        }
        .container div h3 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            line-height: 3.4rem;
        }
        .container div p {
            font-size: 1.5rem;
        }
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        .container img {
            width: 50%;
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        .container div h3 {
            font-size: 2.8rem;
            margin-bottom: 2rem;
        }
        .container div p {
            font-size: 1.6rem;
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        .container {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }      
        .container div {
            width: 50%;
        }
        .container img {
            margin-top: 0;
            width: 50%;
        }
        .container div h3 {
            font-size: 3.8rem;
            margin-bottom: 2.5rem;
            line-height: 4.5rem;
        }
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        .container div {
            width: 60%;
        }
        .container img {
            width: 40%;
        }
        .container div h3 {
            font-size: 4rem;
            margin-bottom: 3rem;
            line-height: 5rem;
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
    }
`;

const AboutMe = () => {
    return (
        <AboutSection>
            <div className="container w-container">
                <div>
                    <h3>Intersection of design, programming and marketing.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img src={illustration} alt="Illustration of a person floating around papers sheets" />
            </div>
        </AboutSection>
    )
}

export default AboutMe;