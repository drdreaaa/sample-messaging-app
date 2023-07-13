import contactsDb from '../postgres/db.services/contactsService.db';
import usersDb from '../postgres/db.services/userService.db';
import userService from './userService';

interface ContactsModel {
    name: string;
    email: string;
    handle: string;
    friendId: number;
}

const contactsService = {
    getContacts: async (id: number) => {
        try {
            const contacts: ContactsModel[] = [];
            await contactsDb.getContactsNames(id).then(res => {
                console.log('res.rows: ')
                console.log(res.rows);
                if (res.rows) {
                    res.rows.forEach(row => {
                        contacts.push({
                            friendId: row.user_id,
                            name: `${row.first_name} ${row.last_name}`,
                            email: row.email,
                            handle: row.handle
                        })
                    })
                }
            });

            console.log(`contacts: ${JSON.stringify(contacts)}`);
            
            return contacts 
                ? contacts
                : [];
        } catch (err) {
            console.log(`[CONTACTS SERVICE] Error executing query ${err}`);
            return { error: `[CONTACTS SERVICE] Error executing query: ${err}`};
        }
        
    },
    addContact: async(userId: number, friendId: number) => {
        try {
            const result = await contactsDb.addContact(userId, friendId);
            console.log(`[CONTACTS SERVICE] addContact result: ${JSON.stringify(result)}`);
            return result.rows
            ? 
            { 
                data: {
                    message: 'Successfully added contact',
                    friendId: result.rows[0].friend_id
                }
            }
            : {
                error: {
                    message: 'Contact not added'
                }
            }
        } catch (error) {
            console.log(`[CONTACTS SERVICE] Internal server error. Error executing query. \n ${error}`);
        }
    }
}

export default contactsService;

// CRUFT
// const friends = await contactsDb.getContactsNames(id);
// console.log(JSON.stringify(friends.rows));


// THE FOLLOWING RETURNS ONLY 1 ITEM
// const friends = await contactsDb.getContacts(id).then(async (contactId) => {
//     const friend = await userService.getUser(contactId.rows[0].friend_id);
//     console.log(friend?.data);
//     if (friend) {
//         contacts.push({name: friend.data ? friend.data : ''})
//     }
//     return friend;
// });
// console.log(JSON.stringify(friends));
// console.log(`[CONTACTS SERVICE] result: ${JSON.stringify(result)}`);


// if (result.rows) {
//     result.rows.forEach(async (row) => {
//         // TODO: add a check to make sure user exists
//         console.log(`row: ${JSON.stringify(row)}`)
//         const friend = await userService.getUser(row.friend_id)
//         const friendName = friend?.data?.rows[0];
//         console.log(friend?.data?.rows[0]);
//         contacts.push({
//             firstName: friendName.first_name,
//             lastName: friendName.lastName
//         })
//     });
// }