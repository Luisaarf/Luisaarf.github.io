import { useContext } from 'react';
import { LanguageContext } from '../../translations/Language';
import './Header.css';
import LanguageSelector from './LanguageSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import translationEn from '../../translations/en.json';
import translationPt from '../../translations/pt-br.json';
// import docCurriculum from '../../assets/docs/CurriculoLuisaRFoppa.pdf';
  
const Header = () => {
    const { language } = useContext(LanguageContext);
    const translation = language === 'BR' ? translationPt : translationEn;

    return (
        <div className="header">
            <div className="head-title">
                <p>Lu Foppa</p>
                {/* Deixar imagem ou só texto?  */}
            </div>
            <nav className="head-nav">
                <ul className="head-list">
                    <li className="head-languages-container">
                        <LanguageSelector  />
                    </li>
                    <li><a href="assets\docs\CurriculoLuisaRFoppa.pdf" target='_blank'>{translation.Header.curriculum}</a></li>
                    <li className="contactme_container">
                        <a href="#contato"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <span className="contactme_caption">{translation.Header.contactcaption}</span>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Header;