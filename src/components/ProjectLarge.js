import React from 'react'

const SkillSet = ({ project }) => {
    return (
        <div className='large'>
            <div className='information'>
                <h4>{project.title}</h4>
                <p>Wordpress + Logo Design</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href={project.url}>Live Website 🚀</a>
            </div>
            <div className='image'>
                <a href={project.url}>
                    <img src='https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='image' />
                </a>
            </div>
        </div>
    )
}

export default SkillSet;