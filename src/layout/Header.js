import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
    border-bottom: 1px solid rgba(33, 38, 47, 0.2);
    display: block;
    height: 51px;
    width: 100%;

    .container {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .container h1 {
        color: #000;
        padding: 14px 0 15px;
        font-size: 1.5rem;
        font-weight: 900;
    }
    .container .mainNav ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
    }
    .container .mainNav ul li {
        margin-left: 5px;
        font-size: 1.5rem;
        font-weight: 400;
        list-style: none;    
    }
    .container .mainNav ul li a {
        color: #000;
        padding: 10px;
        transition: 0.1s ease-in-out;
    }
    .container .mainNav ul li a:hover {
        color: rgba(25, 26, 23, 0.7);
        transition: 0.1s ease-in-out;
    }
    .container .mainNav ul li a.active {
        font-weight: 600;
    }



`;

const Header = () => {

    const url = '';

    return (
        <HeaderStyled>
            <div className="container w-container">
                <h1>maurooren.</h1>
                <nav className="mainNav">
                    <ul>
                        <li>
                            <a href={url} className="active">Hi <span className="icon">👋</span></a>
                        </li>
                        <li>
                            <a href={url}>Projects</a>
                        </li>
                        <li>
                            <a href={url}>Resume</a>
                        </li>
                        <li>
                            <a href={url}>Email me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderStyled>
    )
}

export default Header;