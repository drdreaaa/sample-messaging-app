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
}

export default loginService;