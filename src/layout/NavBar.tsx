import React from 'react';
import { Link } from 'react-router-dom';

// MUI Components
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';

// App Components
import LogoutButton from './LogoutButton';
import Box from '@mui/material/Box';

const NavBar: React.FC = () => {
    

    return (
        <Container id='navContainer'>
            <Box id='navBox' sx={{
                display: 'flex',
                gap: '10px'
            }}>
                <>app logo</>
                <Link to={'/dashboard'}>Dashboard</Link>
                <Link to={'/preferences'}>Preferences</Link>
                {/* <Link to={'/dashboard'}>Dashboard</Link> */}
                <>search icon</>
                <>profile icon</>
                {/* <Button onClick={e => handleLogout(e)}>Logout</Button> */}
                {/* <Button onClick={handleLogout}>Logout</Button> */}
                <LogoutButton />
            </Box>
        </Container>
    )
}

export default NavBar;