import React from 'react';
import useMessagesContext from '../../hooks/useMessagesContext';
import { IContact } from '../../interfaces/contacts.interface';
import ContactCard from './ContactCard';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

const Contacts: React.FC = () => {
    const { contacts2 } = useMessagesContext();
    const navigate = useNavigate();

    if (!contacts2) return <>No contacts added. Add contacts here (add link to open contacts modal)!</>

    const handleContactSelect = (friendId: number) => {
        console.log(`[MessagesDashboard.tsx] selected thread: ${friendId}`);
        navigate(`/messages/contacts/${friendId}`);

    }

    return (
        <Box id='contactsBox' sx={{ display: 'flex', flexDirection: 'column', gap: 5}}>
            {contacts2.map((contact: IContact) => (
                <ContactCard key={contact.friendId} contact={contact} onSelectContact={handleContactSelect} />
            ))}
        </Box>
    )
}

export default Contacts;