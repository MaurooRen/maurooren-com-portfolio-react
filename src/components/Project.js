import React from 'react'
import Emoji from '../components/Emoji';

const Project = ({ project, size, linkWebsite, linkGithub }) => {

    return (
        <div className={size}>
            <div className='information'>
                <h4>{project.title}</h4>
                <p>{project.stack}</p>
                <p>{project.description}</p>
                <a href={project.url} alt={project.title} rel='noreferrer' target='_blank'>
                    { linkWebsite && 'Live Website ' }
                    { linkGithub && 'GitHub Repo ' }
                <Emoji symbol="🚀" label="rocket"/></a>
            </div>
            <div className='image'>
                <a href={project.url} alt={project.title} rel='noreferrer' target='_blank'>
                    <img src={process.env.PUBLIC_URL + project.image} alt={project.title}  />
                </a>
            </div>
        </div>
    )
}

export default Project;