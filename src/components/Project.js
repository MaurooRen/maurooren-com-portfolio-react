import React from 'react'
import Emoji from '../components/Emoji';

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
                    <img src='https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt={project.title}  />
                </a>
            </div>
        </div>
    )
}

export default Project;