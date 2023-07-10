import contactsDb from '../postgres/db.services/contactsService.db';

const contactsService = {
    getContacts: async (id: number) => {
        try {
            const result = await contactsDb.getContacts(id);
            console.log(`[CONTACTS SERVICE] result: ${JSON.stringify(result)}`);
            return result.rows
                ? result.rows
                : null;
        } catch (err) {
            console.log(`[CONTACTS SERVICE] Error executing query ${err}`);
        }

    }
}

export default contactsService;