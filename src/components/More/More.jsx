import React from "react";
import './More.scss';
import { Link } from 'react-router-dom';

function More({ data }) {
    const { habilities, languages, volunteer, personal } = data;
    return (
        <div>
            <div className="habilites">
                {habilities.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
            <div className="languages">
                {languages.language}
                {languages.level}
            </div>
            <div className="volunteer">
                {volunteer.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.where}</p>
                        </div>
                    )
                })}
            </div>
            <div className="others">
                {personal.aboutMe.map((item, index) => {
                    return <p key={index}>{item.info}</p>
                })}
            </div>
            <p><Link to="/" >HOME</Link></p>
        </div>
    )
}

export default More;