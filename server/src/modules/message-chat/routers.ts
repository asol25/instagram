import { Request, Response, Router } from "express";
import { initialize } from "./service";
const messageRouter = Router();

messageRouter.use(function (req, res, next) {
    initialize();
    next();
});

messageRouter.get('/', async (req: Request, res: Response) => {
    const { type } = req.query;
    res.status(200).send('Have you authenticated');
});

export default messageRouter;