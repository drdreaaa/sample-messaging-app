import React from 'react';

// MUI Materials
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

interface MessageCardProps {
    name: string,
    lastMessage: string,
    lastTime: string,
    members?: string[]
}

const MessageCard: React.FC<MessageCardProps> = ({name, lastMessage, lastTime, members}) => {

    return (
        <Card sx={{ width: '250px' }}>
            <CardContent>
                <Typography>{name}</Typography>
                <Typography>{lastMessage}</Typography>
                <Typography>{lastTime}</Typography>
                {members?.length && members.map((memberId) => (
                    <Typography id='memberId'>{memberId}</Typography>
                ))}

            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}

export default MessageCard;