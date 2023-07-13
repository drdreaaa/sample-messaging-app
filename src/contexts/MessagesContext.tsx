import { createContext } from "react";
// TODO: Create Contacts interface
import { IContact } from "../interfaces/contacts.interface";
import { IDirect2 } from "../interfaces/messages.interface";

interface MessagesContext {
    contacts2: IContact[];
    contacts: string[];
    saveContacts2: (contacts: IContact[]) => void;
    saveContacts: (contacts: string[]) => void;
    // fetchContacts: (userId: number) => void;
    directs: IDirect2[]; // | null;
    saveDirects: (directs: any[]) => void;
    
}

const MessagesContext = createContext<MessagesContext>({
    contacts2: [],
    contacts: [],
    saveContacts: () => undefined,
    saveContacts2: () => undefined,
    // fetchContacts: () => undefined
    directs: [],
    saveDirects: () => undefined,
});

export default MessagesContext;