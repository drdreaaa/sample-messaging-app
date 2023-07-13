import { Request, Response, Router } from "express";
import contactsService from "../services/contactsService";
import { fr } from "date-fns/locale";

const contactsRouter = Router();
const BASE_URL = '/api/contacts';

// get contacts
contactsRouter.get(`${BASE_URL}/:id`, async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await contactsService.getContacts(parseInt(id));
    console.log(`[contactsRouter] getContacts response: ${JSON.stringify(response)}`);
    if (response) {
        res.send(response);
    } else {
        res.send(null)
    }
});

// add contact
contactsRouter.post(`${BASE_URL}/add`, async (req: Request, res: Response) => {
    const { userId, friendId } = req.body;
    const response = await contactsService.addContact(userId, friendId);
    console.log(`[contactsRouter] addContact response: ${JSON.stringify(response)}`);
    if (response) {
        res.send(response);
    } else {
        res.send(null)
    }
})

export default contactsRouter;