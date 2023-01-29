import './main.css';
import { Link } from 'react-router-dom';

export function Nav () {
    return ( 
        <nav className="navIndex">
            <Link className='linkIndex' to="/"><p className="pNavIndex">Contacts App</p></Link>
        </nav>
    );
}