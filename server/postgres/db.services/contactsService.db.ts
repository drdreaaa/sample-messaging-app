import db from '../db.config';
import msg_db from '../messaging_db.config';


const contactsServiceDb = {
    getContacts: async (id: number) => {
        return await db.query(`
            SELECT *
            FROM contacts
            WHERE user_id = '${id}'
        `);
    },
    getContactsNames: async(id: number) => {
        return await msg_db.query(`
            SELECT first_name, last_name, email, handle, user_id
            FROM users 
            WHERE user_id 
                IN (
                    SELECT friend_id
                    FROM contacts
                    WHERE user_id='${id}'
                )
            OR user_id 
                IN (
                    SELECT user_id
                    FROM contacts
                    WHERE friend_id='${id}'
                )
        `);
        // PREVIOUS
        // return await db.query(`
        //     SELECT first_name, last_name
        //     FROM users 
        //     WHERE user_id 
        //     IN (
        //         SELECT friend_id
        //         FROM contacts
        //         WHERE user_id='${id}'
        //     )
        // `);
    },
    addContact: async(userId: number, friendId: number) => {
        return await msg_db.query(`
            INSERT INTO contacts
                (user_id, friend_id)
            VALUES
                (${userId}, ${friendId})
            RETURNING *
        `);
    }
}

export default contactsServiceDb;

/* 

SELECT distinct(staffs.id) 
FROM staffs 
WHERE staffs.ID IN (select supervisor_id from Teams)


SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

*/