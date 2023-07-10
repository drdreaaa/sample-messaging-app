import React, { useEffect, useState } from 'react';

// Hooks
import useAuth from '../../hooks/useAuth';
import useLocalStorage from '../../hooks/useLocalStorage';

import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    
    const { login } = useAuth();
    const { getItem } = useLocalStorage();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        const token = getItem('token');
        const userId = getItem('user_id');
        if (token) {
            // TODO: here is where i'd want to hit an api to validate the token?
            // && get the user id?
            console.log(`token: ${token}`);
            console.log(`userId: ${userId}`);
            // with a valid token & user id
            // automatically sign the user in
        }
    }, []);

    // useEffect(() => {
    //     console.log(`[Login.tsx] token in login?: ${token}`);
    //     console.log(`[Login.tsx] userObj in login? ${JSON.stringify(userObj)}`);
    // }, [token, userObj]);

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        // HERE I WANT TO CALL LOGIN FROM useAuth()
        // THIS SHOULD 
            // (1) hit the loginService.login endpoint
            // (2) on success, update userObj in state & add token (future JWT token) to storage
            // (3) on failure, should return a message of invalid credentials
        
        // this should return something
        // maybe just a boolean if it was successful or not?
        const response = await login(email.trim(), password.trim());
        console.log(`[Login.tsx] login response: ${response}`);
        if (response) {
            navigate('/dashboard');
        } else {
            alert('login failure, please check credentials and try again');
        }
    } 

    // const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     e.preventDefault();
    //     // HERE I WANT TO CALL LOGIN FROM useAuth()
    //     // THIS SHOULD 
    //         // (1) hit the loginService.login endpoint
    //         // (2) on success, update userObj in state & add token (future JWT token) to storage
    //         // (3) on failure, should return a message of invalid credentials
        
    //     // this should return something
    //     // maybe just a boolean if it was successful or not?
    //     const responseFromUseAuth = await login(email, password);
    //     console.log(`responseFromUseAuth??? ${responseFromUseAuth}`);



    //     // EVERYTHING BELOW THIS IS WHAT I HAD PREVIOUSLY AND WORKS
    //     const response = await loginService.login(email, password);
    //     console.log(`[Login.tsx] handleLogin response: ${JSON.stringify(response)}`);
    //     console.log(`[Login.tsx] need to add user & token to localStorage`);

    //     // saveUser('andie');
    //     // setUserInStorage('andie');

    //     // save object to state
    //     saveUserObj({
    //         id: '1',
    //         email,
    //         name: 'andie'
    //     })
    //     // save object to storage
    //     setUserObjInStorage({
    //         id: '1',
    //         email,
    //         name: 'andie'
    //     })

    //     // save token to state
    //     saveToken(response.token);
    //     // save token to storage
    //     setTokenInStorage(response.token);

    //     navigate('/dashboard');
    // }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                <p>Username</p>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                {/* <button type="submit" onClick={e => handleSubmit(e)}>Submit</button> */}
                <button type="submit" onClick={e => handleLogin(e)}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;