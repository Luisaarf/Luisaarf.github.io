import React, {useState} from "react";
import './Header.css';
import LanguageSelector from './LanguageSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import '../../assets/brazilflag.png';

const Header = () => {


    // const [selectedOption, setSelectedOption] = useState('');
    // const [showOptions, setShowOptions] = useState(false);
  
    // const options = [
    //   { value: 'pt', label: 'Option 1', image: '../../assets/brazilflag.png' },
    //   { value: 'en', label: 'Option 2', image: '../../assets/Flag_of_the_USA.png' },
    // ];

    // const handleOptionClick = (option) => {
    //     setSelectedOption(option.label);
    //     setShowOptions(false);
    //   };

    const handleLanguageChange = (selectedLanguage: string) => {
        console.log(`Idioma selecionado: ${selectedLanguage}`);
      };
  
    return (
        <div className="header">
            <div className="head-title">
                <p>Lu Foppa</p>
                {/* Deixar imagem ou só texto?  */}
            </div>
            <nav className="head-nav">
                <ul className="head-list">
                    <li className="head-languages-container">
                        <LanguageSelector onChange={handleLanguageChange} />
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