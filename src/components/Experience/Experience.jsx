import React from "react";
import './Experience.scss';
import {Link} from 'react-router-dom';

function Experience ({data}){
    return (
        <div>
            {data.experience.map((item, index) => {
                return (
                    <div className="experience" key={index}>
                        <p>{item.date}</p>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.where}</p>
                    </div>
                )
            })}
            <p><Link to="/" >HOME</Link></p>
        </div>
    )
}

export default Experience;