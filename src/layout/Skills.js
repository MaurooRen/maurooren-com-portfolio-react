import React from 'react'
import styled from 'styled-components'
import SkillSet from '../components/SkillSet'

const SkillsSection = styled.section`
    background-color: #F9F9F9;

    .container {
        padding: 7rem 0 5rem;
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
    .container h4 {
        display: block;
        font-size: 1.8rem;
        font-weight: 700;
        text-align: left;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
    .container ul li {
        background-color: #FFF;
        border-radius: 20px;
        box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        color: #666;
        display: inline-block;
        font-size: 1.6rem;
        font-weight: 500;
        padding: 10px 20px;
        list-style: none;
        margin-right: 2rem;
        margin-bottom: 2rem;
    }
`;

const Skills = () => {
    return (
        <SkillsSection>
            <div className="container w-container">
                <h3>Relevant Skills</h3>
                <p>Intersection of design, business and marketing.</p>
                <SkillSet title='Development' set={['React', 'REST API', 'Javascript', 'Git', 'HTML', 'CSS', 'Sass', 'Wordpress']} />
                <SkillSet title='Design' set={['User Interface', 'Website', 'Adobe XD', 'Photoshop', 'CorelDraw', 'Prints']} />
                <SkillSet title='Others' set={['Marketing', 'Social Media', 'SEO', 'Consulting', 'CMS']} />
            </div>
        </SkillsSection>
    )
}

export default Skills;