import express, { Request, Response } from "express";
import { User } from "../../model/Entity/users";
import { Manager } from "../../model/data-source";
import { insertInformation, comparePassword, sendRefreshToken } from "./service";
export const Authentication = express.Router();

const UserRepository = Manager.getRepository(User);
Authentication.post('/register', async (req: Request, res: Response) => {
    const { username } = req.body;
    try {
        const Account = await UserRepository.findOneBy({ username: username });
        if (Account) return res.status(200).json("Account this has been registered");

        const user = insertInformation(req.body);
        UserRepository.save(await user);
        res.status(200).json(await user);
    } catch (error) {
        console.error({ "POST REGISTER": error.message || error.response?.data?.messages });
        res.status(500).send({ "POST REGISTER": error.message });
    }
})

Authentication.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }

        const user = await UserRepository.findOneBy({ username: req.body.username });
        const isPasswordValid = comparePassword(password, user.password);
        if (!isPasswordValid) throw new Error("Bad password");

        const token = sendRefreshToken(user);
        user.token = token;
        user.id = (user._id as any);


        res.status(200).json(user);
    } catch (error) {
        console.error({ "POST LOGIN": error.message || error.response?.data?.messages });
        res.status(500).send({ "POST LOGIN": error.message });
    }
});