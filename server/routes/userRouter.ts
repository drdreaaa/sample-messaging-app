import e, { Request, Response, Router } from "express";
import userService from "../services/userService";

const userRouter = Router();
const BASE_URL = '/api/users';

// find user by email or handle
userRouter.get(`${BASE_URL}/:user`, async (req: Request, res: Response) => {
    const { user } = req.params;
    const response = await userService.findUser(user);
    console.log(`[userRouter] findUser response: ${response}`);
    if (response) {
        res.send(response.data);
    } else {
        res.send(null);
    }
});

// add contact
userRouter.post(`${BASE_URL}/addContact`, async (req: Request, res: Response) => {
    const { userId, friendId } = req.body;
    const response = await userService.addContact(userId, friendId);
    console.log(`[userRouter] addContact response: ${response}`);
    if (response) {
        res.send(response.data);
    } else {
        res.send(null);
    }
})


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