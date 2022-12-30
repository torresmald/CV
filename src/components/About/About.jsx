import React from "react";
import './About.scss'
import email from '../../images/gmail.png';
import birthday from '../../images/cumpleanos.png';
import github from '../../images/github.png';
import location from '../../images/location.png';

function About({ data }) {
    const { personal } = data
    return (
        <div className="personal">
            <div className="personal__info">
                <div className="personal__info_box">
                <h2 className="name">{personal.name} {personal.lastName}</h2>
                    <div className="location">
                        <img src={location} alt="Ciudad" />
                        <p>{personal.city}</p>
                    </div>
                    <div className="mail">
                        <img src={email} alt="Logo Gmail" className="mail__logo" />
                        <p><a href={"mailto:" + personal.email}>jonathan.torresmald@gmail.com</a></p>
                    </div>
                    <div className="birthday">
                        <img src={birthday} alt="Cumpleaños" />
                        <p>{personal.birthDate}</p>
                    </div>
                    <div className="git">
                        <img src={github} alt="Logo Git" />
                        <p><a href={'https://github.com/torresmald'}>GITHUB</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;