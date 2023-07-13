import Container from '@mui/material/Container';
import React from 'react';
import useMessagesContext from '../../hooks/useMessagesContext';
import MessageCard from './MessageCard';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import ContactCard from './ContactCard';

const MessagesDashboard: React.FC = () => {
    const navigate = useNavigate();
    const { contacts2, directs } = useMessagesContext();

    const handleThreadSelect = (threadId: number) => {
        console.log(`[MessagesDashboard.tsx] selected thread: ${threadId}`);
        navigate(`/messages/threads/${threadId}`);
    }
    
    const handleContactSelect = (friendId: number) => {
        console.log(`[MessagesDashboard.tsx] selected thread: ${friendId}`);
        navigate(`/messages/contacts/${friendId}`);

    }


    return (
        <Container id='msgsDashboardContainer'>
            <Box id='directsBox' sx={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                {directs?.map((dm) => (
                    <MessageCard key={dm.id} 
                        dm={dm}
                        onSelectThread={handleThreadSelect} />
                ))}
            </Box>
            <Box id='contactsBox' sx={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                {contacts2?.map((contact) => (
                    <ContactCard key={contact.friendId} contact={contact} onSelectContact={handleContactSelect} />
                    // <div key={contact}>{contact}</div>
                ))}
            </Box>

        </Container>
    )
}

export default MessagesDashboard;