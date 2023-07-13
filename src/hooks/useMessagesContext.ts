import { useContext } from "react";
import MessagesContext from "../contexts/MessagesContext";
import contactsService from "../clientServices/contacts.service";
import { IContact } from "../interfaces/contacts.interface";
import messagesService from "../clientServices/messages.service";
import { IDirect2 } from "../interfaces/messages.interface";

const useMessagesContext = () => {
    const {contacts, saveContacts, contacts2, saveContacts2, directs, saveDirects } = useContext(MessagesContext);


    const fetchContacts = async (userId: number) => {
        const contacts = await contactsService.getContacts(userId.toString());
        console.log(`[useMessagesContext] contacts: ${JSON.stringify(contacts)}`);
        // saveContacts(contacts) ;
        saveContacts2(contacts) ;

    }

    const fetchDirects = async (userId: number) => {
        const directs = await messagesService.getDirects(userId.toString());
        console.log(`[useMessagesContext] directs: ${JSON.stringify(directs)}`);
        saveDirects(directs as IDirect2[]);
    }

    return { contacts, saveContacts, contacts2, saveContacts2, fetchContacts, directs, saveDirects, fetchDirects };
}

export default useMessagesContext;