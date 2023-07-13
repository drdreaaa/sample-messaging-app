import authDb from '../postgres/db.services/authService.db';

const authService = {
    login: async (email: string, password: string) => {
        try {
            const result = await authDb.login(email, password);
            console.log(`[AUTHSERVICE] login result: ${JSON.stringify(result)}`);
            return result.rows.length 
                ? {...result.rows[0], token: 'test123'}
                : null;
        } catch (error) {
            console.log(`[AUTHSERVICE] Internal server error. Error executing query. \n ${error}`);

        }
    },
    logout: async (token: string) => {
        if (token) {
            console.log(`token: ${token}`);
            console.log(`need to invalidate token: ${token}`);
        }
        return `Successfully logged out`;
    },
    register: async (email: string, password: string, first: string, last: string, handle: string) => {
        try {
            // check if email exists
            const exists = await authDb.checkEmail(email);
            if (exists.rows.length) {
                console.log(`[AUTHSERVICE] email exists ${JSON.stringify(exists.rows)}`);
                return { error: 'User exists' }
            }

            const result = await authDb.register(email, password, first, last, handle);
            console.log(`[AUTHSERVICE] register result: ${JSON.stringify(result.rows)}`);
            

            return result.rows 
                ? { 
                    ...result.rows[0],
                    token: 'test123', 
                } 
                : null;
        } catch (error) {
            console.log(`[AUTHSERVICE] Internal server error. Error executing query. \n ${error}`);
        }
    },
}

export default authService;