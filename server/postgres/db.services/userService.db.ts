import db from '../db.config';
import msg_db from '../messaging_db.config';

const userService = {
    updateProfile: async (email: string) => {
        return await db.query(`
            SELECT *
            FROM users
            WHERE email = '${email}'
        `);
    },
    getUser: async (id: string) => {
        return await db.query(`
            SELECT first_name, last_name 
            FROM users
            WHERE user_id = '${id}'
        `) 
    },










    // MESSAGING DB
    findUser: async (user: string) => {
        return await msg_db.query(`
            SELECT first_name, last_name, user_id, email, handle 
            FROM users
            WHERE email = '${user}'
            OR handle = '${user}'
        `) 
    },
    addContact: async (userId: number, friendId: number) => {
        return await msg_db.query(`
            INSERT INTO messaging.contacts (user_id, friend_id)
            VALUES (${userId}, ${friendId})
            WHERE NOT EXISTS (
                SELECT user_id, friend_id
                FROM messaging.contacts
                WHERE user_id = ${userId}
                AND friend_id = ${friendId}
            )
        `)
    }
}

export default userService;