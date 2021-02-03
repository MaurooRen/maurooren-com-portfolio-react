import React from 'react'
import Emoji from '../components/Emoji';
import dynacars from '../assets/images/dynacars.png';

const Project = ({ project, size }) => {
    return (
        <div className={size}>
            <div className='information'>
                <h4>{project.title}</h4>
                <p>Wordpress + Logo Design</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href={project.url}>Live Website <Emoji symbol="🚀" label="rocket"/></a>
            </div>
            <div className='image'>
                <a href={project.url}>
                    <img src={dynacars} alt={project.title}  />
                </a>
            </div>
        </div>
    )
}

export default Project;