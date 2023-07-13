import React, { useEffect, useMemo, useState } from 'react';

// MUI Materials
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { IDirect2 } from '../../interfaces/messages.interface';

// interface MessageCardProps {
//     name: string,
//     lastMessage: string,
//     lastTime: string,
//     members?: string[],
//     threadId: number,
//     onSelectThread: (threadId: number) => void
// }

interface MessageCardProps {
    dm: IDirect2;
    members?: any;
    onSelectThread: (threadId: number) => void;
}

const MessageCard: React.FC<MessageCardProps> = ({ dm, members, onSelectThread }) => {
    // const [thread, setThread] = useState<number>(threadId);

    // useMemo(() => {
    //     setThread(threadId);
    // }, [threadId]);

    const handleThreadSelect = () => {
        onSelectThread(dm.threadId);
    }

    return (
        <Card sx={{ width: '250px', height: '250px', overflow: 'auto', position: 'relative' }}>
            <CardContent sx={{ maxHeight: '150px', overflow: 'auto' }}>
                <Typography>{dm.friendName}</Typography>
                <Typography>{dm.messageText}</Typography>

                {/* {members?.length && members.map((memberId) => (
                    <Typography id='memberId'>{memberId}</Typography>
                ))} */}

            </CardContent>
            <CardActions sx={{position: 'absolute', bottom: '0'}}>
                <Button size="small" onClick={(e) => handleThreadSelect()}>View</Button>
            </CardActions>
        </Card>
    )
}

export default MessageCard;