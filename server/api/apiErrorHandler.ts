// type interface of express Request, Response
import { Request, Response, NextFunction } from 'express';

export const apiErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) =>  {
	console.log('API error hanler triggered', err);
	res.status(500).json({"errorCode": "ERR-001", "message": "Internal Server Error"});
};
