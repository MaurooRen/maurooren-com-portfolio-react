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
        font-weight: 900;
        text-align: left;
        line-height: 0rem;
    }
    .container p {
        color: #888;
        margin-bottom: 2rem;
        font-weight: 400;
        text-align: left;
    }
    .container h4 {
        display: block;
        font-weight: 700;
        text-align: left;
    }
    .container ul li {
        background-color: #FFF;
        border-radius: 20px;
        color: #666;
        display: inline-block;
        font-weight: 500;
        list-style: none;
    }




    // X-Small devices (portrait phones, less than 576px)
    @media (min-width: 1px) {
        .container h3 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }
        .container p {
            font-size: 1.4rem;
        }
        .container h4 {
            font-size: 1.6rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        .container ul li {
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            font-size: 1.5rem;
            padding: 8px 18px;
            margin-right: 1.8rem;
            margin-bottom: 1.8rem;
        }
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        .container h3 {
            font-size: 2.8rem;
            margin-bottom: 2rem;
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        .container h3 {
            font-size: 3.8rem;
            margin-bottom: 2.5rem;
        }
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        .container h3 {
            font-size: 4rem;
            margin-bottom: 3rem;
        }
        .container p {
            font-size: 1.6rem;
        }
        .container h4 {
            font-size: 1.8rem;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .container ul li {
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
            font-size: 1.6rem;
            padding: 10px 20px;
            margin-right: 2rem;
            margin-bottom: 2rem;
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
    }
`;

const Skills = () => {
    return (
        <SkillsSection>
            <div className="container w-container">
                <h3>Relevant Skills</h3>
                <p>Intersection of design, business and marketing.</p>
                <SkillSet title='Development' set={['React', 'API', 'JS', 'Git', 'Styled-Components', 'HTML', 'CSS', 'Wordpress']} />
                <SkillSet title='Design' set={['User Interface', 'Website', 'Adobe XD', 'Photoshop', 'CorelDraw', 'Prints']} />
                <SkillSet title='Others' set={['Marketing', 'Social Media', 'SEO', 'Consulting', 'CMS']} />
            </div>
        </SkillsSection>
    )
}

export default Skills;