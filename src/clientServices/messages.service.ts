import axios from 'axios';

const BASE_URL = '/api/messages';

const messagesService = {
    getDirects: async (id: string): Promise<any> => {
        const url = `${BASE_URL}/directs/${id}`;
        const directs = await axios.get(url);
        console.log(`[messagesService] getDirects: ${JSON.stringify(directs)}`);
        return directs.data;
    },
    getGroups: async (id: string): Promise<any> => {
        const url = `${BASE_URL}/groups/${id}`;
        const groups = await axios.get(url);
        console.log(`[messagesService] getGroups: ${JSON.stringify(groups)}`);
        return groups.data;
    },
    getThread: async (id: number): Promise<any> => {
        const url = `${BASE_URL}/threads/${id}`;
        const threads = await axios.get(url);
        console.log(`[messagesService] getThreads: ${JSON.stringify(threads)}`);
        return threads.data;
    },
}

export default messagesService;