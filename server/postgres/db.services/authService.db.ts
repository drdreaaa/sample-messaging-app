import db from '../db.config';
import msg_db from '../messaging_db.config';

const authServiceDb = {
    getUsers: async () => {
        // take the request from the controller 
        // query the db
        // return result
        return await db.query('SELECT * FROM users');
    },
    getUserByEmail: async (email: string) => {
        return await db.query(`SELECT * FROM users WHERE email = '${email}'`);
    },
    login: async (email: string, password: string) => {
        // need to decrypt the password
        // check if that matches the email
        // if it does, do the following: 
        return await db.query(`SELECT * from users WHERE email = '${email}'`);
        // if it doesn't, it's a login failure
    },
    checkEmail: async(email: string) => {
        const result = await msg_db.query(`
            SELECT email 
            FROM users
            WHERE email = '${email}'
        `);
        if (result) {
            console.log(`result: ${JSON.stringify(result)}`);
        }

        return result;
    },










    // MESSAGING DB
    register: async (email: string, password: string, first: string, last: string, handle: string) => {
        return await msg_db.query(`
            INSERT INTO users 
                (email, password, first_name, last_name, handle, created_date, modified_date) 
            VALUES
                ('${email}', '${password}', '${first}', '${last}', '${handle}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
            RETURNING user_id, first_name, last_name
        `);
    }
}

export default authServiceDb;