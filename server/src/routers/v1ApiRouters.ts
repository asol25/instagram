import { Request, Response, Router } from "express";
import MessagesChatRouter from "../modules/message-chat/routers";
const v1ApiRouter = Router();
v1ApiRouter.use("/", MessagesChatRouter);

// v1ApiRouter.get("/", (req: Request, res: Response) => {
//     res.status(200).json({
//         success: "true",
//         data: "Api v1",
//     });
// });

export default v1ApiRouter;