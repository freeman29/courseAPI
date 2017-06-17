import * as _ from 'lodash';
// type interface of express Request, Response
import { Request, Response } from 'express';
import { onError } from './onError';
import { onSuccess } from './onSuccess';
import { createLesson } from '../queries/createLesson';
import { databaseErrorHandler } from './databaseErrorHandler';

export const apiCreateLesson = (req: Request, res: Response) =>  {
	createLesson(req.body)
		.then(_.partial(onSuccess, res))
		.catch(_.partial(databaseErrorHandler, res))
		.catch(_.partial(onError, res, `Could not create lesson`));
};