import useLocalStorage from "./useLocalStorage";
import loginService from "../components/login/login.service";
import useAuthContext from "./useAuthContext";


const useAuth = () => {
    // auth context should just deal with the user
    // const { token, saveToken, setTokenInStorage, userObj, saveUserObj, setUserObjInStorage } = useAuthContext();
    const { saveUserObj, removeUserObj } = useAuthContext();
    // local storage should just deal with local storage on browser
    const { /* getItem,  removeItem, */ setItem, clear } = useLocalStorage();

    const login = async (email: string, password: string) => {
        const response = await loginService.login(email, password);
        console.log(`[useAuth hook] login response: ${JSON.stringify(response)}`);
        // if successful, 
            // add user to state variable
            // add token to storage
        // return??? boolean??? 
        if (response) {
            console.log('login success');
            // add token from response to storage
            setItem('token', response.token);
            setItem('user_id', '1');
            // add user to state context
            saveUserObj({
                id: '1',
                email,
                name: 'andie'
            });
            return true;
        } else {
            console.log('login failure');
            return false;
        }
    }

    const logout = () => {
        // LOGOUT SHOULD SET STATE VARS TO NULL 

        // && CLEAR STORAGE
        clear();
        removeUserObj();

        /*
        // THIS SHOULD BE JUST ONE CALL 
        // console.log(`[LogoutButton.tsx] user: ${user}`);
        console.log(`[LogoutButton.tsx] userObj: ${userObj}`);
        console.log(`[LogoutButton.tsx] token: ${token}`);
        // saveUser(null);
        saveToken(null);
        setUserInStorage('');
        setTokenInStorage('');
        removeUserObjInStorage(); 
        */
    }

    return { login, logout };

    // useEffect(() => {
    //     const user = getItem('user');
    //     if (user) {
    //         addUser(JSON.parse(user));
    //     }
    // }, []);

    // const login = async (user: User) => {
    //     const response = await loginService.login(user.email, '');
    //     console.log(`[useAuth.ts] response: ${JSON.stringify(response)}`);
    //     addUser(user);
    //     setItem('token', response.token);
    // }

}

export default useAuth;