import axios from 'axios';

const BASE_URL = '/api/messages';

const messagesService = {
    getContacts: async (id: string): Promise<any> => {
        const url = `${BASE_URL}/${id}`;
        const response = await axios.get(url);
        console.log(`[messagesService] response: ${JSON.stringify(response)}`);
        return response;
    },
    getDirects: async (id: string): Promise<any> => {
        const url = `${BASE_URL}/${id}`;
        const directs = await axios.get(url);
        console.log(`[messagesService] response: ${JSON.stringify(directs)}`);
        return directs;
    }
}

export default messagesService;