import db from '../db.config';

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
        const result = await db.query(`
            SELECT email 
            FROM users
            WHERE email = '${email}'
        `);
        if (result) {
            console.log(`result: ${JSON.stringify(result)}`);
        }

        return result;
    },
    register: async (email: string, password: string) => {
        // encrypt password 
        // THEN save into db
        // https://x-team.com/blog/storing-secure-passwords-with-postgresql/

        return await db.query(`
            INSERT INTO users 
                (email, password, first, last) 
            VALUES
                ('${email}', '${password}', '', '')
        `);
    }
}

export default authServiceDb;