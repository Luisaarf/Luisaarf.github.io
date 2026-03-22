import { useContext } from 'react';
import { LanguageContext } from '../../translations/Language';
import './Main.css';
import profilePic from '../../assets/eulu.jpg';
import translationEn from '../../translations/en.json';
import translationPt from '../../translations/pt-br.json';
import Technologies from './Technologies/Technologies';
import {motion} from "motion/react"

const Main = () => {
    const { language } = useContext(LanguageContext);
    const translation = language === 'BR' ? translationPt : translationEn;
    return (
        <section className="main">
            <div className="main-welcome">
                <div className="main-text">
                    <h1>Luísa R Foppa</h1>
                    <h2>{translation.Main.greeting}</h2>
                    <br/>
                    <p className="main-role">{translation.Main.aboutme1}</p>
                    <br/>
                    <p className="main-tagline" >{translation.Main.tagline}</p>
                    {/* <p>{translation.Main.aboutme2}</p> */}
                    {/* <p>{translation.Main.aboutme3}</p> */}
                </div>
                <motion.div className="profilePic" initial={{ x: window.outerWidth + 200 }}  animate={{ x: 0 }}>
                    {/* <div className="shadow"></div> */}
                    <motion.img alt="This is me" src={profilePic}/>
                </motion.div>
            </div>
            <Technologies />
        </section>
    )
}

export default Main;