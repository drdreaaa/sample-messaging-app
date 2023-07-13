import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Contact: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    return (
        <>
            <Button onClick={() => navigate(-1)}>go back</Button>
            <div>Contact page for friend with id: {id}</div>
        </>
    )
}

export default Contact;