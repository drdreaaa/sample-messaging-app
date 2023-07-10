import React from 'react';

// Contexts
import useAuthContext from '../hooks/useAuthContext';

// MUI Components
import Button from '@mui/material/Button';

// App Components
import Login from '../components/login/Login';
import useAuth from '../hooks/useAuth';
import Logout from '../components/login/Logout';

const LogoutButton: React.FC = () => {
    // const { user, saveUser, token, saveToken, setUserInStorage, setTokenInStorage, userObj, removeUserObjInStorage } = useAuthContext();
    // const { token, saveToken, setUserInStorage, setTokenInStorage, userObj, removeUserObjInStorage } = useAuthContext();
    const { logout } = useAuth();
    
    const handleLogout = () => {
        logout();
        // THIS SHOULD BE JUST ONE CALL 
        // console.log(`[LogoutButton.tsx] user: ${user}`);
        // console.log(`[LogoutButton.tsx] userObj: ${userObj}`);
        // console.log(`[LogoutButton.tsx] token: ${token}`);
        // // saveUser(null);
        // saveToken(null);
        // setUserInStorage('');
        // setTokenInStorage('');
        // removeUserObjInStorage();

        
        
        // return <Login />;
        // return <Logout />;   
    }

    return (
        <Button id='logoutBtn' onClick={handleLogout}>Logout</Button>
    )
}

export default LogoutButton;