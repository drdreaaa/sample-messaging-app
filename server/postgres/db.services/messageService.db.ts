import db from '../db.config';

const messageServiceDb = {
    getMessagesByUserId: async (userId: number) => {
        return await db.query(`
            SELECT *
            FROM messages
            WHERE user_id = ${userId}
        `);
    }
}

export default messageServiceDb;