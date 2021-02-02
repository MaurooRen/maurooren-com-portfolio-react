import React from 'react'
import Project from '../components/Project'
import '../styles/Projects.css'

const Projects = () => {
    return (
        <section className='Projects'>
            <div className="container w-container">
                <h3>Recent Work</h3>
                <p>Probably the section you are most interested in. Have fun exploring some of my recent projects and maybe come back afterwards?</p>
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='large' />
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='large' />
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='small' />
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='small' />
                <Project project={{ title: 'GrupoMaris', url: 'https://www.grupomaris.es/' }} size='small' />
            </div>
        </section>
    )
}

export default Projects;