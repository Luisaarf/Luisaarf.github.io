import React from "react";
import './Main.css';
import profilePic from '../../assets/luisarfoppa2.jpg';

const Main = () => {
    return (
        <section className="main">
            <div className="main-text">
                <h1>Bem-vindos(as) ao meu Portfólio</h1>
                <p>Desenvolvedora Front-end</p>
                <p>Desenvolvedora de Jogos</p>
                <p>Estudante de Jogos e Entretenimento Digital</p>
                <p>Entusiasta de tecnologia e inovação</p>
            </div>
            <div className="profilePic">
                <div className="shadow"></div>
                <img src={profilePic}/>
            </div>
        </section>
    )
}

export default Main;