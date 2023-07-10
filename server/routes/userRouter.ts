import e, { Request, Response, Router } from "express";
import userService from "../services/userService";

const userRouter = Router();
const BASE_URL = '/api/user';

// update profile
userRouter.post(`${BASE_URL}/update`, async (req: Request, res: Response) => {
    const { email } = req.body;
    const response = await userService.updateProfile(email);
    console.log(`[userRouter] response: ${JSON.stringify(response)}`);

    if (response) {
        res.send(response);
    } else {
        res.send(null);
    }
});

export default userRouter;