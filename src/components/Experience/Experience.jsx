import React from "react";
import './Experience.scss';
import {Link} from 'react-router-dom';

function Experience ({data}){
    return (
        <div className="experience">
            {data.experience.map((item, index) => {
                return (
                    <div className="experience__card" key={index}>
                        <p>{item.date}</p>
                        <p>Puesto: {item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.where}</p>
                    </div>
                )
            })}
            <p className="buttonHome"><Link to="/" >HOME</Link></p>
        </div>
    )
}

export default Experience;