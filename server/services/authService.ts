// import db from '../configs/db';
import authDb from '../postgres/db.services/authService.db';


/* 
userRouter.post('/login', async(req: Request, res: Response) => {
    try {
        // const result = await userService.login(email, password);
        const result = await userService.login(req.body.email);
        console.log(`[userRouters.ts] get users result: ${JSON.stringify(result)}`)
        res.json(result.rows);
    } catch (err) {
        console.log(`[userRouter.ts] Error executing query ${err}`);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});
*/

const authService = {
    login: async (email: string, password: string) => {
        try {
            const result = await authDb.login(email, password);
            console.log(`[AUTHSERVICE] login result: ${JSON.stringify(result)}`);
            return result.rows.length 
                ? {...result.rows, token: 'test123'}
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
    register: async (email: string, password: string) => {
        try {
            // check if email exists
            const exists = await authDb.checkEmail(email);
            if (exists.rows.length) {
                console.log(`[AUTHSERVICE] email exists ${JSON.stringify(exists.rows)}`);
                return { error: 'User exists' }
            }

            const result = await authDb.register(email, password);
            console.log(`[AUTHSERVICE] register result: ${JSON.stringify(result.rows)}`);

            return result.rows 
                ? { token: 'test123', id: '1' } 
                : null;
        } catch (error) {
            console.log(`[AUTHSERVICE] Internal server error. Error executing query. \n ${error}`);
        }
    },
}

export default authService;