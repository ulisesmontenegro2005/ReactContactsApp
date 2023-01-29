import './main.css';
import { Link } from 'react-router-dom';
import { ContactsContext } from '../../context/ContactsContext';
import { useContext } from 'react'; 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

export function Formulario () {
    const { findById, addContact } = useContext(ContactsContext);

    const capturarForm =() => {
        let nombre = document.getElementById('nombreForm').value
        let apellido = document.getElementById('apellidoForm').value
        let telefono = document.getElementById('telefonoForm').value

        let a = {nombre: nombre, apellido: apellido, telefono: telefono}

        if (findById(telefono)) {
            return (
                MySwal.fire({
                    html: <i>El numero ya existe, no puedes tener dos cotactos con el mismo numero.</i>,
                    icon: 'warning'
                  })
            )
        }

        addContact(a);
    }

    return (
        <main className='mainForm'>
            <input id='nombreForm' className='inputForm' placeholder='Nombre' required></input>
            <input id='apellidoForm' className='inputForm' placeholder='Apellido' required></input>
            <input id='telefonoForm' className='inputForm' placeholder='Telefono' required></input>
            <Link className='buttonForm' onClick={capturarForm} to="/">Agregar</Link>
        </main>
    );
}