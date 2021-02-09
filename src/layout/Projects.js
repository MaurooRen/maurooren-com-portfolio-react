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
`;

const Projects = () => {
    return (
        <ProjectsStyled className='Projects'>
            <div className="container w-container">
                <h3>Recent Work</h3>
                <p>Probably the section you are most interested in. Have fun exploring some of my recent projects and maybe come back afterwards?</p>
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='large' />
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='large' />
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='small' />
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='small' />
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='small' />
            </div>
        </ProjectsStyled>
    )
}

export default Projects;