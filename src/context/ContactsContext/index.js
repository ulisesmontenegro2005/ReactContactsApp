import React, { useState } from "react";
export const ContactsContext = React.createContext(true);


export function ContactsCustomContext ({children}) {
    const [Contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        const newArr = [...Contacts, contact]
        setContacts(newArr)
    }

    const findById = (id) => {
        return Contacts.find(c => c.telefono === id)
    }

    const deleteById = (id) => {
        const newArr = [...Contacts].filter(c => c.telefono !== id);
        setContacts(newArr)
    }

    return (
        <ContactsContext.Provider value={ {addContact, data: Contacts, findById, deleteById} }>
            {children}
        </ContactsContext.Provider>
    );
}