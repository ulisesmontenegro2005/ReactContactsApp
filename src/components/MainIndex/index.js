import './main.css';
import { useContext } from 'react'; 
import { Contact } from '../Contact';
import { ContactsContext } from '../../context/ContactsContext';

export function MainIndex () {
    const { data } = useContext(ContactsContext);

    return (
        <main className='mainIndex'>
            {
                data.map((c) => {
                    return <Contact key={c.telefono} telefono={c.telefono} nombre={c.nombre} apellido={c.apellido}/>
                })
            }
        </main>
    );
}