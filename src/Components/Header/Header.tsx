import { useContext , useEffect, useState} from 'react';
import { LanguageContext } from '../../translations/Language';
import './Header.css';
import LanguageSelector from './LanguageSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import translationEn from '../../translations/en.json';
import translationPt from '../../translations/pt-br.json';
import docCurriculum from '../../assets/docs/CurriculoLuisaRFoppa.pdf';
import recruTest from '../../assets/docs/RecruTest.pdf';
  
const Header = () => {
    const { language } = useContext(LanguageContext);
    const translation = language === 'BR' ? translationPt : translationEn;
    const [scrolled, setScrolled] = useState(false);

    const loadCurriculum = () => {
        // if (language !== 'BR') {
        //     return recruTest ## english curriculum
        // }
        return docCurriculum
    }

    window.onscroll = function() {scrollFunction()};

    const scrollFunction = () => {
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20? setScrolled(true) : setScrolled(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);
    }, []);

    return (
        <div style={{ 
                height: scrolled ? '20px' : '40px',  
                transition: 'all 0.3s ease-in-out',
                backgroundColor: scrolled ? 'rgb(102, 166, 120)' : 'rgb(241, 246, 241)',
                }} 
                className="header">
            <div className="head-title">
                <p>Lu Foppa</p>
                {/* Deixar imagem ou só texto?  */}
            </div>
            <nav style={{ 
                height: scrolled ? '0px' : '40px',  
                transition: 'all 0.3s ease-in-out',
                 visibility: scrolled ? 'hidden' : 'visible',
                }} className="head-nav">
                <ul className="head-list">
                    <li className="head-languages-container">
                        <LanguageSelector  />
                    </li>
                    <li><a href={loadCurriculum()}  target='_blank'>{translation.Header.curriculum}</a></li>
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