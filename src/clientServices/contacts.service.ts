import axios from 'axios';

const BASE_URL = '/api/contacts';

// TODOs:
// TODO: standardize request and responses
// TODO: add checks for errors

const contactsService = {
    getContacts: async (id: string): Promise<any> => {
        const url = `${BASE_URL}/${id}`;
        const response = await axios.get(url);
        console.log(`[contactsService] getContacts: ${JSON.stringify(response.data)}`);
        return response.data;
    },
    addContact: async(userId: number, friendId: number): Promise<any> => {
        const url = `${BASE_URL}/add`;
        const response = await axios.post(url, {
            userId,
            friendId
        });
        console.log(`[contactsService] addContact: ${JSON.stringify(response)}`);
        return response.data;
    }
}

export default contactsService;