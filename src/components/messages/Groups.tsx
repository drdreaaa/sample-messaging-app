import Container from '@mui/material/Container';
import React from 'react';
import MessageCard from './MessageCard';

const data = [
    {
        id: '1',
        name: 'name1',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
    },
    {
        id: '2',
        name: 'name1',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
        members: ['101', '102', '103', '104']
    },
    {
        id: '3',
        name: 'name1',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
        members: ['101', '102', '103', '104']
    },
    {
        id: '4',
        name: 'name1',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
        members: ['101', '102', '103', '104']
    },
    {
        id: '5',
        name: 'name1',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
        members: ['101', '102', '103', '104']
    },
    {
        id: '6',
        name: 'name1',
        lastMessage: 'good night! ttyl <3',
        lastMessageTime: 'July 8, 12:48 pm',
        members: ['101', '102', '103', '104']
    },
]
const Groups: React.FC = () => {

    return (
        <Container>
            <h4>Group Messages</h4>
            {data.map((item) => (
                <MessageCard key={item.id} name={item.name} lastMessage={item.lastMessage} lastTime={item.lastMessageTime}/>
            ))}
        </Container>
    )
}

export default Groups;