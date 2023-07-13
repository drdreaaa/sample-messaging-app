import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// MUI Components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// App Components
import MessagesSidebar from './MessagesSidebar';

// Services
import MessagesProvider from '../../contexts/MessagesProvider';

const Messages: React.FC = () => {

    return (
        // <MessagesProvider>
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
        // </MessagesProvider>
    )
}

export default Messages;