import { useContext } from 'react';
import { LanguageContext } from '../../translations/Language';
import './Main.css';
import profilePic from '../../assets/luisarfoppa2.jpg';
import translationEn from '../../translations/en.json';
import translationPt from '../../translations/pt-br.json';

const Main = () => {
    const { language } = useContext(LanguageContext);
    const translation = language === 'BR' ? translationPt : translationEn;
    return (
        <section className="main">
            <div className="main-text">
                <h1>{translation.Main.greeting}</h1>
                <p>{translation.Main.aboutme1}</p>
                <p>{translation.Main.aboutme2}</p>
                <p>{translation.Main.aboutme3}</p>
                <p>{translation.Main.aboutme4}</p>
            </div>
            <div className="profilePic">
                <div className="shadow"></div>
                <img src={profilePic}/>
            </div>
        </section>
    )
}

export default Main;