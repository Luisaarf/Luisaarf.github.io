import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="head-title">
                <p>Lu Foppa</p>
                {/* Deixar imagem ou só texto?  */}
            </div>
            <nav className="head-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>

    )
}

export default Header;