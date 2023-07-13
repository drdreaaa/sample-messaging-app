import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import messagesService from '../../clientServices/messages.service';
import useAuthContext from '../../hooks/useAuthContext';
import { format, parse } from 'date-fns';
import Button from '@mui/material/Button';

interface IThread {
    id: number;
    threadId: number;
    userId: number;
    messageText: string;
    createdTime: Date;
}

const Thread: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { userObj } = useAuthContext();
    const [messages, setMessages] = useState<IThread[]>([]);


    useEffect(() => {
        console.log(`id: ${id}`);
        messagesService.getThread(parseInt(id!)).then((res) => {
            // console.log(`get thread res: ${JSON.stringify(res)}`);
            setMessages(res as IThread[]);
        })
    }, [id]);

    useEffect(() => {
        if (messages) {
            console.log(messages);
        }
    }, [messages]);

    return (
        <Container id='threadContainer'>
            <Button onClick={() => navigate(-1)}>go back</Button>
            <Typography>thread header</Typography>
            <>last message time</>
            
            {/* {messages && messages.map((line) => {
                if (line.userId.toString() === userObj!.id) {
                    return (
                        <Typography>{line.messageText}</Typography>
                        )
                } else {
                    return (
                        <>
                            <Typography>{line.userId}</Typography>
                            <Typography>{line.messageText}</Typography>
                        
                        </>
                )}
            })} */}
            {messages && messages.map((line) => 
                (
                    <Typography key={line.id}>{line.messageText}</Typography>
                )
            )}
        </Container>
    )
}

export default Thread;