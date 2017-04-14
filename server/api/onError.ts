// type interface of express Request, Response
import { Response } from 'express';

export const onError = (res: Response, message: string, err: any) => {
	console.error('Promise chain error', err);
	res.status(500).send();
}