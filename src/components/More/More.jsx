import React from "react";
import './More.scss';
import { Link } from 'react-router-dom';

function More({ data }) {
    const { habilities, languages, volunteer, personal } = data;
    return (
        <div className="more">
            <div className="more__habilites">
                {habilities.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
            <div className="more__languages">
                <p>{`Idiomas: ${languages.language}`}</p>
                <p>{`Nivel: ${languages.level}`}</p>
            </div>
            <div className="more__volunteer">
                {volunteer.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3>Voluntariado</h3>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.where}</p>
                        </div>
                    )
                })}
            </div>
            <div className="more__others">
                {personal.aboutMe.map((item, index) => {
                    return <p key={index}>{item.info}</p>
                })}
            </div>
            <p className="buttonHome"><Link to="/" >HOME</Link></p>
        </div>
    )
}

export default More;