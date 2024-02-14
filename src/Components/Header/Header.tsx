import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <div className="head-title">
                <p>Lu Foppa</p>
                {/* Deixar imagem ou só texto?  */}
            </div>
            <nav className="head-nav">
                <ul>
                    <li><select>
                            <option value="pt">PT</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                    <li><a href="docs/Curriculo.pdf">Currículo</a></li>
                    <li className="contactme_container">
                        <a href="#contato"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <span className="contactme_caption">Contate-me</span>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Header;