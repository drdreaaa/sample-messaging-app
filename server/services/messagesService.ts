import messagesDb from '../postgres/db.services/messageService.db';

const messagesService = {
    getThreads: async (id: number) => {
        try {
            const result = await messagesDb.getMessagesByUserId(id);
            console.log(`[MESSAGES SERVICE] result: ${JSON.stringify(result.rows)}`);
            
            // TODO: change the keys from the db column_name to columnName

            return result.rows
                ? result.rows.map((dm) => {
                    return {
                        userId: dm.user_id,
                        friendId: dm.friend_id,
                        threadId: dm.thread_id,
                        recentMessages: dm.recent_messages,
                        lastMessage: dm.last_message,
                        lastMessageTime: dm.last_message_time
                    }

                })
                : null;
        } catch (err) {
            console.log(`[MESSAGES SERVICE] Error executing query ${err}`);
        }
    },
    getDirects: async (id: number) => {
        try {
            // const result = await messagesDb.getMessagesByUserId(id);
            const result = await messagesDb.getDirectsById(id);
            // console.log(`[MESSAGES SERVICE] result: ${JSON.stringify(result.rows)}`);
            
            return result.rows
                ? result.rows.map((dm) => {
                    return {
                        id: dm.id,
                        userId: dm.user_id,
                        friendId: dm.friend_id,
                        threadId: dm.thread_id,
                        messageText: dm.message_text,
                        sentTime: dm.created_time,
                        friendName: dm.first_name
                    }
                })
                : null;
        } catch (err) {
            console.log(`[MESSAGES SERVICE] Error executing query ${err}`);
        }
    },
    getThread: async (id: number) => {
        try {
            const result = await messagesDb.getThread(id);
            console.log(`[MESSAGES SERVICE] result: ${JSON.stringify(result.rows)}`);
            
            // TODO: change the keys from the db column_name to columnName
            /*
[MESSAGES SERVICE] result: [{"id":"1","thread_id":"1","user_id":"1","message_text":"first line","created_time":"2023-07-11T16:13:26.491Z","id2":"1"},{"id":"2","thread_id":"1","user_id":"1","message_text":"second line","created_time":"2023-07-11T16:17:41.840Z","id2":"2"},{"id":"3","thread_id":"1","user_id":"1","message_text":"third line","created_time":"2023-07-11T16:17:41.841Z","id2":"3"},{"id":"4","thread_id":"1","user_id":"2","message_text":"user 2's message","created_time":"2023-07-11T16:17:41.842Z","id2":"4"}]
            */

            return result.rows
                ? result.rows
                    .map((dm) => {
                        return {
                            id: dm.id,
                            userId: dm.user_id,
                            threadId: dm.thread_id,
                            messageText: dm.message_text,
                            createdTime: dm.created_time
                        }

                    })
                : null;
        } catch (err) {
            console.log(`[MESSAGES SERVICE] Error executing query ${err}`);
        }
    },
    getGroups: async (id: number) => {
        try {
            const result = await messagesDb.getGroupMessagesByUserId(id);
            console.log(`[MESSAGES SERVICE] result: ${JSON.stringify(result)}`);
            return result.rows
                ? result.rows
                : null;
        } catch (err) {
            console.log(`[MESSAGES SERVICE] Error executing query ${err}`);
        }
    },
}

export default messagesService;