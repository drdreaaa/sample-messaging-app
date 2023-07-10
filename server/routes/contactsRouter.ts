import { Request, Response, Router } from "express";
import contactsService from "../services/contactsService";

const contactsRouter = Router();
const BASE_URL = '/api/messages';

// get contacts
contactsRouter.get(`${BASE_URL}/:id`, async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await contactsService.getContacts(parseInt(id));
    console.log(`[contactsRouter] response: ${JSON.stringify(response)}`);
    if (response) {
        res.send(response);
    } else {
        res.send(null)
    }
});

export default contactsRouter;