import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface ProductPayLoad {
    id: string;
    name: string;
}

/* 
    Best way to 'extend' Request interface in Express
*/
declare global {
    namespace Express {
        interface Request {
            currentProduct?: ProductPayLoad;
        }
    }
}

export const currentProduct = (
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
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as ProductPayLoad;
        req.currentProduct = payload;
    } catch (err) {}

    next();
};