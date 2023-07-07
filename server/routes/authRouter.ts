import { Request, Response, Router } from "express";
import authService from "../services/authService";

const authRouter = Router();

authRouter.post('/api/login', async (req: Request, res: Response) => {
    console.log(`what does the request look like: `)
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const response = await authService.login(req.body.username, req.body.password);
    console.log(`[authRouter] response from service: ${JSON.stringify(response)}`);

    if (response) {
        // creds: 'asdf' and 'asdf'
        // should be { token: 'test123' };
        res.send(response);
    } else {
        res.send(null)
    }
    // res.send({
    //     token: 'test123'
    // })
});

// authRouter.get('/api/login', (req: Request, res: Response) => {
//     console.log(`what does the request look like: `)
//     console.log(`req.body: ${JSON.stringify(req.body)}`)
//     res.send({
//         token: 'test123'
//     })
// });


/* 
userRouter.post('/auth/login2', async (req: Request, res: Response) => {
    try {
        const result = await userService.login(req.body.email);
        console.log(`[userRouters.ts] get users result: ${JSON.stringify(result)}`)
        res.json(result.rows);
    } catch (error) {
        console.log(`[userRouter.ts] Error executing query ${error}`);
        res.status(500).json({ error: 'Internal Server Error'});
    }
})
*/

export default authRouter;