import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { NextFunction } from "express";
import { privateKey } from './config';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) return res.status(403).json("A token is required for authentication");

    try {
        const decoded = jwt.verify(token, privateKey.secret);
        if (decoded) next();
    } catch (error) {
        console.error({ error: error.message });
    }
}