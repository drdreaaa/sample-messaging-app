import db from '../db.config';

const userService = {
    updateProfile: async (email: string) => {
        return await db.query(`
            SELECT *
            FROM users
            WHERE email = '${email}'
        `);
    }
}

export default userService;