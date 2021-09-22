import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        /* 
        This beauty here is what gives format to errors
        It is designed to handle different backends
        And always return the same structure.
        CHECK DB CONNECTION ERRORS and ABSTRCT CLASS */
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    console.log(err);
    res.status(400).send({
        message: [{ message: 'Something went wrong' }]
    });
};