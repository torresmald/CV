import React from "react";
import { Link } from 'react-router-dom';
import '../Option/Option.scss';
function Option() {
    return (
        <div className="buttons">
            <Link to={'/education'}>
                <button className="button">Educación</button>
            </Link>
            <Link to={'/experience'}>
                <button className="button">Experiencia</button>
            </Link>
            <Link to={'/more'}>
                <button className="button">Otros Datos</button>
            </Link>

        </div>
    )
}

export default Option;