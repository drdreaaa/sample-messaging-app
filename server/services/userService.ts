import userServiceDb from "../postgres/db.services/userService.db";
import { BrowserRouter } from 'react-router-dom';
const userService = {
    updateProfile: async (email: string) => {
        try {
            const result = await userServiceDb.updateProfile(email);
            console.log(`[USER SERVICE] login result: ${JSON.stringify(result)}`);
            return result.rows 
                ? { data: result }
                : null;
        } catch (err) {
            console.log(`[USER SERVICE] err: ${err}`);
            return { error: `[USER SERVICE] Error updating profile: ${err}`}
        }
    },
    getUser: async (id: string) => {
        try {
            const result = await userServiceDb.getUser(id);
            // console.log(`[USER SERVICE] getUser result: ${JSON.stringify(result)}`);
            return result.rows 
                ? { data: `${result.rows[0].first_name} ${result.rows[0].last_name}` }
                : null;
        } catch (err) {
            console.log(`[USER SERVICE] err: ${err}`);
            return { error: `[USER SERVICE] Error updating profile: ${err}`}
        }
    },
    findUser: async (user: string) => {
        try {
            const result = await userServiceDb.findUser(user);
            console.log(`[USER SERVICE] findUser result: ${JSON.stringify(result.rows)}`);
            return result.rows 
                ? { 
                    data: {
                        name: `${result.rows[0].first_name} ${result.rows[0].last_name}`,
                        friendId: result.rows[0].user_id,
                        email: result.rows[0].email,
                        handle: result.rows[0].handle
                    } 
                }
                : null;
        } catch (err) {
            console.log(`[USER SERVICE] err: ${err}`);
            return { error: `[USER SERVICE] Error updating profile: ${err}`}
        }
    },
    addContact: async (userId: number, friendId: number) => {
        try {
            const result = await userServiceDb.addContact(userId, friendId);
            return result.rows
                ? { data: `` }
                : { data: `error adding user` }
        } catch (err) {
            console.log(`[USER SERVICE] err: ${err}`);
            return { error: `[USER SERVICE] Error adding contact: ${err}`}
        }
    }
}

export default userService;