import './main.css';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io'
import { IconContext } from 'react-icons';


export function HeaderIndex () {
    return (
        <header className="headerIndex">
            <div className='divActionsHeader'> 
                <SearchHeader placeholder="Search"/>
                <AddHeader/>
            </div>
        </header>
    );
}

function SearchHeader (props) {
    return (
        <input placeholder={props.placeholder} className="searchHeaderIndex"></input>
    );
}

function AddHeader () {
    return (
        <IconContext.Provider value={{ className: "iconAdd" }}>
            <Link to='/form'><IoMdAdd/></Link>
        </IconContext.Provider>
    );
}


