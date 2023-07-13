import axios from 'axios';



const loginService = {
    login: async(email: string, password: string): Promise<any> => {
        const url = '/api/login';
        const response = await axios.post(url, {
            email,
            password
        });
        return response.data;
    },
    register: async(email: string, password: string, first: string, last: string, handle?: string): Promise<any> => {
        const url = '/api/register';
        const response = await axios.post(url, {
            email,
            password,
            first,
            last,
            handle: handle ? handle : email

        })
        return response;
    }
}

export default loginService;