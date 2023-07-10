import db from '../db.config';

const contactsServiceDb = {
    getContacts: async (id: number) => {
        return await db.query(`
            SELECT *
            FROM contacts
            WHERE user_id = '${id}'
        `);
    }
}

export default contactsServiceDb;