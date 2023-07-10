import userServiceDb from "../postgres/db.services/userService.db";
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
    }
}

export default userService;