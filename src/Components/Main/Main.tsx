import { useContext } from 'react';
import { LanguageContext } from '../../translations/Language';
import './Main.css';
import profilePic from '../../assets/eulu.jpg';
import translationEn from '../../translations/en.json';
import translationPt from '../../translations/pt-br.json';
import Technologies from './Technologies/Technologies';

const Main = () => {
    const { language } = useContext(LanguageContext);
    const translation = language === 'BR' ? translationPt : translationEn;
    return (
        <section className="main">
            <div className="main-welcome">
                <div className="main-text">
                    <h1>{translation.Main.greeting}</h1>
                    <p>{translation.Main.aboutme1}</p>
                    <p>{translation.Main.aboutme2}</p>
                    <p>{translation.Main.aboutme3}</p>
                    <p>{translation.Main.aboutme4}</p>
                </div>
                <div className="profilePic">
                    {/* <div className="shadow"></div> */}
                    <img alt="This is me" src={profilePic}/>
                </div>
            </div>
            <Technologies />
        </section>
    )
}

export default Main;