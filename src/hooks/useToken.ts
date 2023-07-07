import { useState } from 'react';

const useToken = () => {
    const getToken = (): string => {
        const tokenString: string = localStorage.getItem('token') || '';
        const userToken = tokenString ? JSON.parse(tokenString) : '';
        return userToken; //?.token;
        // const tokenString = localStorage.getItem('token');
        // const userToken = JSON.parse(tokenString);
        // return userToken?.token
    };

    const [token, setToken] = useState<string>(getToken());


    const saveToken = (userToken: string) => {
        if (userToken) {
            localStorage.setItem('token', JSON.stringify(userToken));
            setToken(userToken);
        } else {
            localStorage.clear();
        }
    };

    const clearToken = () => {
        localStorage.clear();
    }

    return {
        setToken: saveToken,
        token,
        clearToken
    }
}

export default useToken;