import { useState } from 'react';

// Contexts
import MessagesContext from './MessagesContext';

// Interfaces
import { IContact } from '../interfaces/contacts.interface';
import { IDirect2 } from '../interfaces/messages.interface';

type Props = {
    children?: React.ReactNode;
}

const MessagesProvider: React.FC<Props> = ({children}) => {
    const [contacts, setContacts] = useState<string[]>([]); // should be IContact[]
    const [contacts2, setContacts2] = useState<IContact[]>([]); // should be IContact[]
    const [directs, setDirects] = useState<IDirect2[]>([]); // should be IDirect[]
    // const [directs, setDirects] = useState<string[] | null>([]); // should be IDirect[] // PLACEHOLDER FOR GROUPS

    const saveContacts = (contacts: string[]) => {
        setContacts(contacts);
    }
    const saveContacts2 = (contacts: IContact[]) => {
        setContacts2(contacts);
    }

    const saveDirects = (directs: IDirect2[]) => {
        setDirects(directs);
    }
    
    // PLACEHOLDER FOR GROUPS
    // const saveDirects = (directs: string[] | null) => {
    //     setDirects(directs);
    // }

    return (
        <MessagesContext.Provider value={{ contacts, saveContacts, contacts2, saveContacts2, directs, saveDirects }}>{children}</MessagesContext.Provider>
    )
}

export default MessagesProvider;