import React from 'react'
import '../styles/Header.css';

const Header = () => {

    const url = '';

    return (
        <header className="Header">
            <div className="container w-container">
                <h1>mra.</h1>
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
        </header>
    )
}

export default Header;