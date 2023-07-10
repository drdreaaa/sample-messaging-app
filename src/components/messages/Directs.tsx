import Container from '@mui/material/Container';
import React from 'react';
import MessageCard from './MessageCard';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

const data = [
    {
        id: '1',
        name: 'name1',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
    },
    {
        id: '2',
        name: 'name2',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
    },
    {
        id: '3',
        name: 'name3',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
    },
    {
        id: '4',
        name: 'name4',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
    },
    {
        id: '5',
        name: 'name5',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
    },
    {
        id: '6',
        name: 'name6',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
    },
]

const Directs: React.FC = () => {

    return (
        <Container>
            <h4>Direct Messages</h4>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px', maxWidth: '550px' }}>
                {data.map((item) => (
                    <MessageCard key={item.id} name={item.name} lastMessage={item.lastMessage} lastTime={item.lastMessageTime}/>
                ))}
            </Box>
        </Container>
    )
}

export default Directs;