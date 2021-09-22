import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayLoad {
    id: string;
    email: string;
    prodId: string;
}

/* 
    Best way to 'extend' Request interface in Express
*/
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayLoad;
        }
    }
}

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Check if property exists
    if(!req.session?.jwt){
        return next();
    }

    // We are assigning a new property to object 'req'
    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayLoad;
        req.currentUser = payload;
    } catch (err) {}

    next();
};