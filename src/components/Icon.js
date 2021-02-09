import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconLink = styled.a`
    display: inline-block;
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    -webkit-transition: all 250ms ease;
    transition: all 250ms ease;

    &:hover {
        opacity: 0.6;
    transform: translate3d(0px, -5px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    }
    
    .Icon {
        display: block;
        font-size: 3rem;
        padding-left: 21px;
    }    
`;

const Icon = ({ icon, link, alt }) => {
    return (
        <IconLink href={link} alt={alt} rel='noreferrer' target='_blank'>
            <FontAwesomeIcon icon={['fab', icon]} className="Icon" />
        </IconLink>
    )
}

export default Icon;