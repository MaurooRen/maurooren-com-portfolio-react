import React from 'react'
import ProjectLarge from '../components/ProjectLarge'
import '../styles/Projects.css'

const Projects = () => {
    return (
        <section className='Projects'>
            <div className="container w-container">
                <h3>Recent Work</h3>
                <p>Probably the section you are most interested in. Have fun exploring some of my recent projects and maybe come back afterwards?</p>
                <ProjectLarge project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} />
                <ProjectLarge project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} />
            </div>
        </section>
    )
}

export default Projects;