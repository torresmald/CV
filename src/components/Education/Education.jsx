import React from "react";
import './Education.scss';
import { Link } from 'react-router-dom';

function Education({ data }) {
    return (
        <div className="education">
            {data.education.map((item, index) => {
                return (
                    <div key={index} className='education__card'>
                        <h3>{item.name}</h3>
                        <h4>Año: {item.date}</h4>
                        <p>Localidad: {item.where}</p>
                        <ul>
                            {item.subjects.map((subject, index) => {
                                return <li key={index}>{subject}</li>
                            })}
                        </ul>
                    </div>
                )
            })}
            <p className="buttonHome"><Link to="/" >HOME</Link></p>
        </div>
    )
}

export default Education;