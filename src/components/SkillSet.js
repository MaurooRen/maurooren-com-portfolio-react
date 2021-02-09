import React from 'react'

const SkillSet = ({ title, set }) => {
    return (
        <>
            <h4>{ title }</h4>
            <ul>
            {
                set.map((skill) => {
                    return <li key={skill}>{ skill }</li>
                })
            }
            </ul>
        </>
    )
}

export default SkillSet;