import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import useLocalStorage from "./useLocalStorage";
import { User } from "../interfaces/user.interface";
import useAuth from "./useAuth";

const useAuthContext = () => {
    const {token, saveToken, saveUserObj, removeUserObj, userObj} = useContext(AuthContext);

    const {getItem, setItem, removeItem} = useLocalStorage();
    

    if (userObj === undefined || token === undefined) {
        console.log(`[useAuthContext.ts] userObj or token is undefined`);
    }

    
    const setTokenInStorage = (newToken: string) => {
        if (newToken) {
            setItem('token', newToken);
        } else {
            removeItem('token');
        }
    }
    
    return { token, saveToken, setTokenInStorage, userObj, saveUserObj, removeUserObj };
}

export default useAuthContext;

/*
CRUFT
// return {user, saveUser, setUserInStorage, token, saveToken, setTokenInStorage, userObj, saveUserObj, setUserObjInStorage, removeUserObjInStorage};


const setUserInStorage = (newUser: string) => {
    if (newUser) {
        setItem('user', newUser);
    } else {
        removeItem('user');
    }
}

// const setUserObjInStorage = (newUserObj: User) => {
//     if (newUserObj) {
//         setItem('userObj', JSON.stringify(newUserObj));
//     } else {
//         removeItem('userObj');
//     }
// }

// const removeUserObjInStorage = () => {
//     removeItem('userObj');
// }
\



*/