import { Request, Response, Router } from "express";
import { Authentication } from "../modules/auth/router";
import { auth } from "../middleware/auth";
const v1ApiRouter = Router();

v1ApiRouter.get("/", auth ,(req: Request, res: Response) => {
    res.status(200).json({
        success: "true",
        data: "Api v1",
    });
});

v1ApiRouter.use("/api/authentication", Authentication)
export default v1ApiRouter;