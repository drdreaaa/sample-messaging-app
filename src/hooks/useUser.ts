import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import useLocalStorage from "./useLocalStorage";

export interface User {
    id: string;
    name: string;
    email: string;
    authToken?: string;
}

const useUser = () => {
    // get the user from the context
    // get the function to setUser from the context
        // what does this mean
    // const { user, setUser } = useContext(AuthContext);
    const { userObj } = useContext(AuthContext);
    const { setItem, removeItem } = useLocalStorage();

    const addUser = (user: User) => {
        // setUser(user);
        setItem('user', JSON.stringify(user));
    }

    const removeUser = () => {
        // setUser(null);
        removeItem('user');
        // setItem('user', '');
    }

    // return { user, addUser, removeUser, setUser };
    return { userObj, addUser, removeUser };
}

export default useUser;