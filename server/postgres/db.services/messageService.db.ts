import db from '../db.config';

const messageServiceDb = {
    // select distinct on (id) id, date, another_info
    // from the_table
    // order by id, date desc;
    getDirectsById: async (userId: number) => {
        const dms = await db.query(`
            
            SELECT distinct on (c.thread_id) c.id, c.thread_id, c.user_id, d.friend_id, c.message_text, c.created_time, u.first_name
            FROM messaging.chat_line c
            JOIN messaging.directs d
                ON c.thread_id = d.thread_id
            JOIN public.users u
                ON u.user_id = d.friend_id
            WHERE c.user_id = ${userId}
            ORDER BY c.thread_id, c.created_time DESC
            
        `);
            // SELECT *
            // FROM messaging.directs d
            // JOIN messaging.chat_line c
            //     ON c.thread_id = d.thread_id
            //     AND d.user_id = ${userId}
            //     AND c.user_id = ${userId}        


        // const dms = await db.query(`
        //     SELECT *
        //     FROM messaging.directs
        //     WHERE user_id = ${userId}
        // `);

        console.log(JSON.stringify(dms));

        return dms;
        // return await db.query(`
        //     SELECT *
        //     FROM messages
        //     WHERE user_id = ${userId}
        // `);
    },
    getMessagesByUserId: async (userId: number) => {
        const dms = await db.query(`
            SELECT *
            FROM messages
            WHERE user_id = ${userId}
        `);

        console.log(JSON.stringify(dms));

        return dms;
        // return await db.query(`
        //     SELECT *
        //     FROM messages
        //     WHERE user_id = ${userId}
        // `);
    },
    getGroupMessagesByUserId: async (userId: number) => {
        return await db.query(`
            SELECT *
            FROM groups
            WHERE user_id = ${userId}
        `);
    },
    getThread: async (threadId: number) => {
        return await db.query(`
            SELECT *
            FROM messaging.chat_line
            WHERE thread_id = ${threadId}
            ORDER BY created_time ASC
        `);
    }
}

export default messageServiceDb;