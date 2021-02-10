import React from 'react'
import Emoji from '../components/Emoji';

const Project = ({ project, size }) => {

    console.log(project.image)
    return (
        <div className={size}>
            <div className='information'>
                <h4>{project.title}</h4>
                <p>{project.stack}</p>
                <p>{project.description}</p>
                <a href={project.url}>Live Website <Emoji symbol="🚀" label="rocket"/></a>
            </div>
            <div className='image'>
                <a href={project.url}>
                    <img src={project.image} alt={project.title}  />
                </a>
            </div>
        </div>
    )
}

export default Project;