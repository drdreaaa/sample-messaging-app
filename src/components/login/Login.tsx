import React, { useEffect, useState } from 'react';

// Hooks
import useLocalStorage from '../../hooks/useLocalStorage';

import { useNavigate } from 'react-router-dom';
import loginService from './login.service';
import useAuthContext from '../../hooks/useAuthContext';
import useAuth from '../../hooks/useAuth';


const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // const { user, saveUser, token, saveToken, setUserInStorage, setTokenInStorage, userObj, saveUserObj, setUserObjInStorage } = useAuthContext();
    // perhaps this should just have one function to save token (which should save token to state and storage); same with userObj
    const { token, saveToken, setTokenInStorage, userObj, saveUserObj, setUserObjInStorage } = useAuthContext();
    const { login } = useAuth();

    useEffect(() => {
        console.log(`[Login.tsx] token in login?: ${token}`);
        console.log(`[Login.tsx] userObj in login? ${JSON.stringify(userObj)}`);
    }, [token, userObj]);

    const handleLogin2 = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // HERE I WANT TO CALL LOGIN FROM useAuth()
        // THIS SHOULD 
            // (1) hit the loginService.login endpoint
            // (2) on success, update userObj in state & add token (future JWT token) to storage
            // (3) on failure, should return a message of invalid credentials
        
        // this should return something
        // maybe just a boolean if it was successful or not?
        const response = await login(username, password);
        console.log(`[Login.tsx] login response: ${response}`);
        if (response) {
            navigate('/dashboard');
        } else {
            alert('login failure, please check credentials and try again');
            resetForm();
        }
    } 

    const resetForm = () => {
        setUserName('');
        setPassword('');
    }


    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // HERE I WANT TO CALL LOGIN FROM useAuth()
        // THIS SHOULD 
            // (1) hit the loginService.login endpoint
            // (2) on success, update userObj in state & add token (future JWT token) to storage
            // (3) on failure, should return a message of invalid credentials
        
        // this should return something
        // maybe just a boolean if it was successful or not?
        const responseFromUseAuth = await login(username, password);
        console.log(`responseFromUseAuth??? ${responseFromUseAuth}`);



        // EVERYTHING BELOW THIS IS WHAT I HAD PREVIOUSLY AND WORKS
        const response = await loginService.login(username, password);
        console.log(`[Login.tsx] handleLogin response: ${JSON.stringify(response)}`);
        console.log(`[Login.tsx] need to add user & token to localStorage`);

        // saveUser('andie');
        // setUserInStorage('andie');

        // save object to state
        saveUserObj({
            id: '1',
            username,
            name: 'andie'
        })
        // save object to storage
        setUserObjInStorage({
            id: '1',
            username,
            name: 'andie'
        })

        // save token to state
        saveToken(response.token);
        // save token to storage
        setTokenInStorage(response.token);

        navigate('/dashboard');
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                {/* <button type="submit" onClick={e => handleSubmit(e)}>Submit</button> */}
                <button type="submit" onClick={e => handleLogin2(e)}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;