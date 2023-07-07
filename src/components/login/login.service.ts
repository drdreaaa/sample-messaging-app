import axios from 'axios';

const loginService = {
    login: async(username: string, password: string): Promise<any> => {
        const url = '/api/login';
        const response = await axios.post(url, {
            username,
            password
        });
        return response.data;
    },
}

export default loginService;