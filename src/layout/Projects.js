import React from 'react'
import styled from 'styled-components'
import Project from '../components/Project'

const ProjectsStyled = styled.section`
    .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding: 7rem 0 5rem;
    }
    .container .large {
        margin-bottom: 7rem;
    }
    .container h3 {
        width: 100%;
        font-size: 4rem;
        font-weight: 900;
        text-align: left;
        line-height: 0rem;
        margin-bottom: 3rem;
    }
    .container p {
        color: #888;
        margin-bottom: 2rem;
        font-size: 1.6rem;
        font-weight: 400;
        text-align: left;
    }
    .container .large {
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
    }
    .container > .large .information, .large .image {
        display: inline;
    }
    .container .large .information {
        width: 48%;
        margin-right: 2%;
    }
    .container > .large .information h4, .small .information h4 {
        margin-bottom: 0.5rem;
        font-size: 2.5rem;
        font-weight: 700;
    }
    .container > .large .information p:nth-child(2), .small .information p:nth-child(2) {
        margin-bottom: 2rem;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
    }
    .container > .large .information p:nth-child(3), .small .information p:nth-child(3) {
        margin-bottom: 3rem;
        font-size: 1.5rem;
        font-weight: 400;
    }
    .container > .large .information a, .small .information a {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    .container .large .image {
        width: 50%;
    }
    .container > .large .image img, .small .image img {
        display: block;
        width: 100%;
    }
    .container .small {
        display: flex;
        flex-direction: column;
        width: 32%;
    }
    .container .small .image {
        display: block;
        order: 1;
    }
    .container .small .information {
        display: block;
        order: 2;
    }
    .container > .large .image, .small .image {
        width: 100%;
    }



    // X-Small devices (portrait phones, less than 576px)
    @media (min-width: 1px) {
        .container h3 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }
        .container p {
            font-size: 1.4rem;
        }
        .container > .large, .small {
            align-items: flex-start;
            align-content: flex-start;
            flex-direction: column;
            flex-wrap: wrap;
        }
        .container > .large .information, .small .information {
            display: block;
            order: 2;
            margin-top: 1rem;
            margin-right: 0px;
            width: 100%;
        }
        .container > .large .image, .small .image {
            display: block;
            order: 1;
            width: 100%;
        }
        .container .small {
            margin-bottom: 7rem;
            justify-content: space-between;
            width: 100%;
        }
        .container .small:nth-child(7) {
            margin-bottom: 0;
        }
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        .container h3 {
            font-size: 2.8rem;
            margin-bottom: 2rem;
        }
        .container .large, .container .small {
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
        }
        .container .large .information {
            display: inline;
            order: 1;
            width: 48%;
            margin-right: 2%;
        }
        .container .large .image {
            display: inline;
            order: 2;
            width: 50%;
            transition: all 0.5s;
        }
        .container .small {
            margin-bottom: 7rem;
            width: 100%;
        }
        .container .small .image {
            display: inline;
            order: 2;
            width: 50%;
            transition: all 0.5s;
        }
        .container .small .information {
            display: inline;
            order: 1;
            margin-right: 2%;
            width: 48%;
        }

        .container .image:hover {
            transform: scale(1.03);
        }

    }

    // Large devices (desktops, 992px and up)
    
    @media (min-width: 992px) {
        .container h3 {
            font-size: 3.8rem;
            margin-bottom: 2.5rem;
        }
        .container .small {
            flex-direction: column;
            justify-content: flex-start;
            width: 32%;
        }
        .container .small .image {
            display: block;
            order: 1;
            width: 100%;
        }
        .container .small .information {
            display: block;
            order: 2;
            width: 100%;
        }
        .container .small:nth-child(6) {
            margin-bottom: 7rem;
        }
        .container .small:nth-child(7) {
            display: flex;
        }
        .container .small:nth-child(7) .image {
            display: block;
        }
        .container .small:nth-child(7) .information {
            display: block;
        }
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        .container h3 {
            font-size: 4rem;
            margin-bottom: 3rem;
        }
        .container p {
            font-size: 1.6rem;
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
    }
`;

const Projects = () => {
    return (
        <ProjectsStyled className='Projects'>
            <div className="container w-container">
                <h3>Recent Work</h3>
                <p>Probably the section you are most interested in. Have fun exploring some of my recent projects.</p>
                <Project project={{ title: 'Netflix Clone App', url: 'https://netflix-clone-react-4307e.web.app/', stack: 'React + TMDb API + CSS', description: 'Netflix Clone implements different endpoints of TMDb API to display individual movie sections. Users can click over the movie components and see the trailer found on YouTube.', image: '/images/netflix.jpg' }} size='large' linkWebsite />
                <Project project={{ title: 'NASA OPEN APIs', url: 'https://nasa-open-api.herokuapp.com/', stack: 'UI + React + Styled-Components', description: "An App that replicated one of NASA's most popular websites. The users can see a photo or video of the day plus the most relevant information about, information consumed from NASA's API.", image: '/images/nasaapi.png' }} size='large' linkWebsite />
                <Project project={{ title: 'CryptApp', url: 'https://react-api-crypto-tracker.herokuapp.com/', stack: 'React + CoinGecko API + CSS', description: 'Building a Crypto App that allow users check values and percentages of different crypto currencies and search for an specific one using the CoinGecko API', image: '/images/crypto.jpg' }} size='small' linkWebsite />
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/', stack: 'Wordpress', description: 'Implement website to meet the requirements of allowing the Dealership itself to update the listing of vehicles based on the existing inventory', image: '/images/dynacars.png' }} size='small' linkWebsite />
                <Project project={{ title: 'Personal Portfolio', url: 'https://github.com/MaurooRen/maurooren-com-portfolio-react', stack: 'React + WeatherAPI + Styled-Components', description: 'The UI created in Adobe XD. Weather API was implemented to display the weather in Miami, FL (Emoji in the intro)', image: '/images/portfolio.png' }} size='small' linkGithub />
            </div>
        </ProjectsStyled>
    )
}

export default Projects;