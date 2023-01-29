import './main.css';
import { ContactsContext } from '../../context/ContactsContext';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsFillTelephoneFill, BsFillTrashFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';

export function ContactDetails () {

    const { findById } = useContext(ContactsContext);

    const { id } = useParams();

    const contact = findById(id);

    return (
        <main className='mainContactDetails'>
            <div>
                <div className='iconDetails'><p>{contact.nombre.charAt(0)}</p></div>
            </div>
            <div className='divContactDetails'>
                <p className='textContactDetails'> {contact.nombre}</p>
                <p className='textContactDetails'>{contact.apellido}</p>
            </div>
            <div className='divButtonsContactDetails'>
                <a href={`tel:${contact.telefono}`} className='buttonDetails'>
                    <BsFillTelephoneFill className='telButton' size={28} color={"616161"}/>
                    <label className='buttonDetailsLabel'>celular</label>
                </a>
                <a target={'_blank'} rel="noopener noreferrer" href={`sms:${contact.telefono}`} className='buttonDetails'>
                    <AiFillMessage size={30} color={"616161"}/>
                    <label className='buttonDetailsLabel'>mensaje</label>
                </a>
                <a target={'_blank'} rel="noopener noreferrer" href={`https://api.whatsapp.com/send/?phone=${contact.telefono}`} className='buttonDetails'>
                    <RiWhatsappFill size={30} color={"616161"}/>
                    <label className='buttonDetailsLabel'>whatsapp</label>
                </a>
            </div>
            <div className='numeroDetails'>
                <label className='labelContactDetails'>numero</label>
                <p className='textContactDetails'>{contact.telefono}</p>
            </div>
            <DeleteButton id={contact.telefono}/>
        </main>
    )
}

function DeleteButton (c) {
    const { deleteById } = useContext(ContactsContext);

    const eliminar = () => {
        deleteById(c.id)
    }

    return (
        <Link className='deleteDetails' to={'/'} onClick={eliminar}>
            <BsFillTrashFill size={28} color={"black"}/>
            <p className='deleteContactDetails'>Eliminar</p>
        </Link>
    )
}