import Container from '@mui/material/Container';
import React from 'react';
import MessageCard from './MessageCard';
import Box from '@mui/material/Box';
import useMessagesContext from '../../hooks/useMessagesContext';
import { useNavigate } from 'react-router-dom';

const Directs: React.FC = () => {
    const navigate = useNavigate();
    const { directs } = useMessagesContext();

    const handleThreadSelect = (threadId: number) => {
        console.log(`[Directs.tsx] selected thread: ${threadId}`);
        navigate(`/messages/threads/${threadId}`);
    }

    return (
        <Container>
            <h4>Direct Messages</h4>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px', maxWidth: '550px' }}>
                {/* {directs.map((item) => (
                    <MessageCard key={item.threadId} 
                        threadId={item.threadId}
                        name={item.threadId.toString()} 
                        lastMessage={item.lastMessage} 
                        lastTime={item.lastMessageTime}
                        onSelectThread={handleThreadSelect}
                    />
                ))} */}
                {directs?.map((dm) => (
                    <MessageCard key={dm.id} 
                        dm={dm}
                        onSelectThread={handleThreadSelect} />
                ))}
            </Box>
        </Container>
    )
}

export default Directs;