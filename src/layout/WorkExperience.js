import React from 'react'
import Button from '../components/Button';
import Work from '../components/Work';
import '../styles/WorkExperience.css';

const WorkExperience = () => {

    return (
        <section className="WorkExperience">
            <div className="container w-container">
                <div>
                    <h3>Relevant Skills</h3>
                    <Button style='button-secondary' text='Get my CV (LinkedIn)' link='https://www.linkedin.com/in/maurooren/' />
                </div>
                <Work />
                <Work />
                <Work />
            </div>
        </section>
    )
}

export default WorkExperience;