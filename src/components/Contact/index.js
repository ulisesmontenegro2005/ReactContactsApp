import './main.css';
import { Link } from 'react-router-dom';

export function Contact (props) {
    return( 
        <Link className='linkContactDetails' to={`/${props.telefono}`}>
            <div className='contactoIndex'>
                <p className='contactoTextoIndex'>{props.nombre}</p>
                <p className='contactoTextoIndex'>{props.apellido}</p>
            </div>
        </Link>
    );
}