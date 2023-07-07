import { createContext } from "react";
import { User } from "../hooks/useUser";

/*
    I think I want to refactor the AuthContext so that all I need is a way to return the user
        What's the best way of determining if a user is logged in?
            is there a token in storage
            is there a user in storage (maybe the user just needs to be in the state?)
*/


interface AuthContext {
    // DON'T NEED ANYMORE user: string | null; // User | null;
        // saveUser:  (user: string | null) => void; // (user: User | null) => void;
    userObj: User | null;
    saveUserObj: (user: User) => void;
    removeUserObj: () => void;
    token: string | null;
    saveToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContext>({
    // DON'T NEED ANYMORE user: null,
        // saveUser: () => undefined,
    userObj: null,
    saveUserObj: () => undefined,
    removeUserObj: () => undefined,
    token: null,
    saveToken: () => undefined
});

export default AuthContext;