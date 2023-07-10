import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// MUI Components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// App Components
import MessagesSidebar from './MessagesSidebar';
import messagesService from '../../clientServices/messages.service';
import useAuthContext from '../../hooks/useAuthContext';

const Messages: React.FC = () => {
    const { userObj } = useAuthContext();
    const [contacts, setContacts] = useState([]);
    const [directs, setDirects] = useState([]);

    useEffect(() => {
        if (userObj) {
            messagesService.getContacts(userObj?.id).then((res) => {
                setContacts(res);
            });

        }
    }, []);

    return (
        <Container id='messagesContainer'
            sx={{
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <Box id='messagesSidebar'>
                <MessagesSidebar />                
            </Box>

            <Box id='messagesPanel'>
                <h3>Messages</h3>
                <Outlet />
            </Box>
        </Container>
    )
}

export default Messages;