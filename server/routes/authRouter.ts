import { Request, Response, Router } from "express";
import jwt from 'jsonwebtoken';
import authService from "../services/authService";

const authRouter = Router();

// login
authRouter.post('/api/login', async (req: Request, res: Response) => {
    console.log(`what does the request look like: `)
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const { email, password } = req.body;
    const response = await authService.login(email, password);
    console.log(`[authRouter] response from service: ${JSON.stringify(response)}`);

    if (response) {
        res.send(response);
    } else {
        res.send(null)
    }
});

// logout
authRouter.post('/api/logout', async (req: Request, res: Response) => {
    const { userId } = req.body;
    const response = authService.logout(userId);
    res.send(response);
});

authRouter.post('/api/register', async (req: Request, res: Response) => {
    const { email, password, first, last, handle } = req.body;
    const response = await authService.register(email, password, first, last, handle);
    console.log(`[authRouter] response from service] ${JSON.stringify(response)}`);
    if (response) {
        res.send(response);
    } else {
        res.send(null);
    }
});

authRouter.get('/api/validateToken', (req: Request, res: Response) => {
    const tokenHeaderKey = process.env.TOKEN_HEADER_KEY!; // TODO: LOOK AT !
    const jwtSecretKey = process.env.JWT_SECRET_KEY!; // TODO: LOOK AT !

    try {
        const token = req.header(tokenHeaderKey)!;
        const verified = jwt.verify(token, jwtSecretKey);

        if (verified) {
            return res.send('Successfully verified!');
        } else {
            return res.status(401).send('Access denied')
        }
    } catch (error) {
        return res.status(401).send(`Access Denied: Error: ${error}`);
    }
})

authRouter.post('/api/generateToken', (req: Request, res: Response) => {
    const { userId } = req.body.userId;
    const jwtSecretKey = process.env.JWT_SECRET_KEY!;
    const data = {
        time: new Date(),
        userId
    };

    const token = jwt.sign(data, jwtSecretKey);
    res.send(token);
});

export default authRouter;