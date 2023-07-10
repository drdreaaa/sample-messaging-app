import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2>Talk soon! Ta-ta for now!</h2>
            <Button onClick={() => navigate('login')}>Return to login</Button>
        </>
    )
}

export default Logout;