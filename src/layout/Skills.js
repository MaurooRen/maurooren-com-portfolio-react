import React from 'react'
import SkillSet from '../components/SkillSet'
import '../styles/Skills.css'

const Skills = () => {
    return (
        <section className='Skills'>
            <div className="container w-container">
                <h3>Relevant Skills</h3>
                <p>Intersection of design, business and marketing.</p>
                <SkillSet title='Development' set={['React', 'REST API', 'Javascript', 'Git', 'HTML', 'CSS', 'Sass', 'Wordpress']} />
                <SkillSet title='Design' set={['User Interface', 'Website', 'Adobe XD', 'Photoshop', 'CorelDraw', 'Prints']} />
                <SkillSet title='Others' set={['Marketing', 'Social Media', 'SEO', 'Consulting', 'CMS']} />
            </div>
        </section>
    )
}

export default Skills;