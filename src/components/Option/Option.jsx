import React from "react";
import { Link } from 'react-router-dom';
import '../Option/Option.scss';
function Option() {
    return (
        <div>
            <Link to={'/education'}>
                <button>Educación</button>
            </Link>
            <Link to={'/experience'}>
                <button>Experiencia</button>
            </Link>
            <Link to={'/more'}>
                <button>Otros Datos</button>
            </Link>

        </div>
    )
}

export default Option;