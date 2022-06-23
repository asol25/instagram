import { Request, Response, Router } from "express";
import { Authentication } from "../modules/auth/router";
import { auth } from "../middleware/auth/auth";
import rateLimit from "../middleware/limit server/rateLimit";
const v1ApiRouter = Router();

v1ApiRouter.use("/", rateLimit, (req: Request, res: Response) => {
    res.status(200).json({
        success: "true",
        data: "Api v1",
    });
});

v1ApiRouter.use("/api/authentication", Authentication)
export default v1ApiRouter;