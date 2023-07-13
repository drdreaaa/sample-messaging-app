import useLocalStorage from "./useLocalStorage";
import loginService from "../clientServices/login.service";
import useAuthContext from "./useAuthContext";


const useAuth = () => {
    const { saveUserObj, removeUserObj } = useAuthContext();
    const { setItem, clear } = useLocalStorage();

    // const { fetchContacts } = useMessagesContext();

    const register = async(email: string, password: string, first: string, last: string, handle?: string) => {
        const response = await loginService.register(email, password, first, last, handle);
        console.log(`[useAuth hook] register response: ${JSON.stringify(response)}`);
        if (response.error) {
            console.log('register failure');
            return response.error;
        } else {
            console.log('register success');
            const { userId, email, first, last, handle, token } = response;
            setItem('token', token);
            setItem('user_id', userId);
            // TODO: add last and handle to state context and interface
            saveUserObj({
                id: response.user_id,
                email,
                name: first,
            });   
            return userId;
        }
    }

    const login = async (email: string, password: string) => {
        const response = await loginService.login(email, password);
        console.log(`[useAuth hook] login response: ${JSON.stringify(response)}`);
        if (response) {
            const { user_id, email, first_name, token } = response;

            console.log('login success');
            // add token & user id from response to storage
            setItem('token', token);
            setItem('user_id', user_id);
            // add user to state context
            saveUserObj({
                id: response.user_id,
                email,
                name: first_name
            });            

            // fetch contacts: need ids & names to populate contact tiles
            // fetch dms: just need ids & metadata to populate dm tiles
                // on tile click, fetch message thread
            // fetch groups: need ids & metadata to populate group thread tiles
                // on tile click, fetch message thread

            return user_id;
        } else {
            console.log('login failure');
            return false;
        }
    }

    const logout = () => {
        clear();
        removeUserObj();
    }

    return { login, logout, register };
}

export default useAuth;