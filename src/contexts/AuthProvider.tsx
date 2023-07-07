import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Hooks
import useLocalStorage from '../hooks/useLocalStorage';

// Contexts
import AuthContext from './AuthContext';

// Interfaces
import { User } from '../interfaces/user.interface';

type Props = {
    children?: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({children}) => {
    const navigate = useNavigate();
    const { getItem } = useLocalStorage();
    // const [user, setUser] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const [userObj, setUserObj] = useState<User | null>(null);

    useEffect(() => {
        // check local storage to see if items exist
        // const currentUser = getItem('user');
        // if (currentUser) {
        //     setUser(currentUser);
        // }
        const currentUserObj = getItem('userObj');
        const currentToken = getItem('token');
        if (currentUserObj) {
            console.log(`typof currentUserObj: ${typeof currentUserObj}`);
            setUserObj(JSON.parse(currentUserObj));
        }

        if (currentToken) {
            setToken(currentToken);
        }
    }, []);

    // const saveUser = (newUser: string | null) => {
    //     if (newUser) {
    //         setUser(newUser);
    //     } else {
    //         setUser('');
    //     }
    // }

    const saveUserObj = (newUserObj: User) => {
        setUserObj(newUserObj);
    }

    const removeUserObj = () => {
        setUserObj(null);
    }
    
    const saveToken = (newToken: string | null) => {
        if (newToken) {
            setToken(newToken);
        } else {
            setToken('');
            navigate('/login');
        }
    }


    return (
        // <AuthContext.Provider value={{ user, userObj, saveUser, saveUserObj, removeUserObj,token, saveToken }}>{children}</AuthContext.Provider>
        <AuthContext.Provider value={{ userObj, saveUserObj, removeUserObj,token, saveToken }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;