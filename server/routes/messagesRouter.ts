import { Request, Response, Router } from "express";
import messagesService from "../services/messagesService";

const messagesRouter = Router();
const BASE_URL = '/api/messages';

// get directs
messagesRouter.get(`${BASE_URL}/directs/:id`, async (req: Request, res: Response) => {
    const { id } = req.params;
    // const response = await messagesService.getThreads(parseInt(id));
    const response = await messagesService.getDirects(parseInt(id));
    // console.log(`[messagesRouter] response: ${JSON.stringify(response)}`);
    if (response) {
        res.send(response);
    } else {
        res.send(null)
    }
});

// get groups
messagesRouter.get(`${BASE_URL}/groups/:id`, async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await messagesService.getGroups(parseInt(id));
    console.log(`[messagesRouter] response: ${JSON.stringify(response)}`);
    if (response) {
        res.send(response);
    } else {
        res.send(null)
    }
});

// get threads
messagesRouter.get(`${BASE_URL}/threads/:id`, async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await messagesService.getThread(parseInt(id));
    console.log(`[messagesRouter] getThreads response: ${JSON.stringify(response)}`);
    if (response) {
        res.send(response);
    } else {
        res.send(null)
    }
});

export default messagesRouter;