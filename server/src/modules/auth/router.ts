import express, {Request, Response}  from "express";
const Authentication = express.Router();

Authentication.post('/register', (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        console.error({error: error.message});
        res.status(500).send({error: error.message});
    }
})