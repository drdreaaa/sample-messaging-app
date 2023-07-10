import React from 'react';
import { Link } from 'react-router-dom';

// MUI Components
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';

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
                <Box>
                    <ChatIcon />
                </Box>

                <Box id='navLinks' 
                    sx={{ 
                        display: 'flex',
                        gap: '15px' 
                    }}>
                    <Link to={'/dashboard'}>Dashboard</Link>
                    <Link to={'/messages'}>Messages</Link>
                    <Link to={'/preferences'}>Preferences</Link>
                    {/* <Link to={'/dashboard'}>Dashboard</Link> */}
                </Box>

                <Box>
                    <LogoutButton />
                    <SearchIcon />
                    <AccountCircleIcon />
                </Box>

                {/* <Button onClick={e => handleLogout(e)}>Logout</Button> */}
                {/* <Button onClick={handleLogout}>Logout</Button> */}
            </Box>
        </Container>
    )
}

export default NavBar;