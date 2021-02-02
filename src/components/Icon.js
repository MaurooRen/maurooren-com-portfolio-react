import React from 'react'
import '../styles/Icon.css';
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ size, icon, link, alt }) => {
    return (
        <a href={link} alt={alt} className="iconLink">
            <FontAwesomeIcon icon={['fab', icon]} className="Icon" />
        </a>
    )
}

export default Icon;