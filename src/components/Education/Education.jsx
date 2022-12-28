import React from "react";
import './Education.scss';
import {Link} from 'react-router-dom';

function Education({ data }) {
    return (
        <div>
            {data.education.map((item, index) => {
                return (
                    <div key={index} className='card'>
                        <p>{item.name}</p>
                        <p>{item.date}</p>
                        <p>{item.where}</p>
                        <p>{item.subjects}</p>
                        
                    </div>
                )
            })}
            <p><Link to="/" >HOME</Link></p>
        </div>
    )
}

export default Education;