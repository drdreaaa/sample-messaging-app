import React from 'react';
import { IContact } from '../../interfaces/contacts.interface';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

interface ContactCardProps {
    contact: IContact;
    onSelectContact: (friendId: number) => void
}


// TODOs
// TODO: 
const ContactCard: React.FC<ContactCardProps> = ({ contact, onSelectContact }) => {
    const navigate = useNavigate();

    const handleContactSelect = () => {
        console.log(`selected: ${contact.name}; call parent's contactSelect function`);
        onSelectContact(contact.friendId);
    }

    const handleContactDelete = () => {
        console.log(`deleting contact ${contact.name} call parent's contactDelete function`);
        navigate('/messages/contacts');
    }

    return (
        <Card sx={{ width: '250px', height: '100px', overflow: 'auto', position: 'relative' }}>
            <CardContent sx={{ maxHeight: '150px', overflow: 'auto' }}>
                <Typography>{contact.name}</Typography>

            </CardContent>
            <CardActions sx={{position: 'absolute', bottom: '0'}}>
                <Button size="small" onClick={() => handleContactSelect()}>Message</Button>
                <Button size="small" onClick={() => handleContactDelete()}>Remove Contact</Button>
            </CardActions>
        </Card>
    )
}

export default ContactCard;