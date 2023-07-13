import axios from 'axios';

const BASE_URL = '/api/users';

const usersService = {
    findUser: async (user: string): Promise<any> => {
        const url = `${BASE_URL}/${user}`;
        const response = await axios.get(url);
        console.log(`[contactsService] findUser: ${JSON.stringify(response.data)}`);
        return response.data;
    },
    addContact: async (userId: number, friendId: number): Promise<any> => {
        const url = `${BASE_URL}/addContact`;
        const response = await axios.post(url, { userId, friendId} );
        console.log(`[contactsService] addContact: ${JSON.stringify(response.data)}`);
        return response.data;
    },
}

export default usersService;