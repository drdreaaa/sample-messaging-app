import useLocalStorage from "./useLocalStorage";
import loginService from "../components/login/login.service";
import useAuthContext from "./useAuthContext";


const useAuth = () => {
    // auth context should just deal with the user
    // const { token, saveToken, setTokenInStorage, userObj, saveUserObj, setUserObjInStorage } = useAuthContext();
    const { saveUserObj } = useAuthContext();
    // local storage should just deal with local storage on browser
    const { /* getItem,  removeItem, */ setItem, clear } = useLocalStorage();

    const login = async (username: string, password: string) => {
        const response = await loginService.login(username, password);
        console.log(`[useAuth hook] login response: ${JSON.stringify(response)}`);
        // if successful, 
            // add user to state variable
            // add token to storage
        // return??? boolean??? 
        if (response) {
            console.log('login success');
            // add token from response to storage
            setItem('token', response.token);
            // add user to state context
            saveUserObj({
                id: '1',
                username,
                name: 'andie'
            });
            return true;
        } else {
            console.log('login failure');
            return false;
        }
    }

    const logout = () => {
        // LOGOUT SHOULD SET STATE VARS TO NULL && CLEAR STORAGE
        clear();
    }

    return { login, logout };

    // useEffect(() => {
    //     const user = getItem('user');
    //     if (user) {
    //         addUser(JSON.parse(user));
    //     }
    // }, []);

    // const login = async (user: User) => {
    //     const response = await loginService.login(user.username, '');
    //     console.log(`[useAuth.ts] response: ${JSON.stringify(response)}`);
    //     addUser(user);
    //     setItem('token', response.token);
    // }

}

export default useAuth;