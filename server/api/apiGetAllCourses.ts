import * as _ from 'lodash';
// type interface of express Request, Response
import { Request, Response } from 'express';
import { findAllCourses } from "../queries/findAllCourses";
import { onError } from './onError';
import { onSuccess } from './onSuccess';

export const apiGetAllCourses = (req: Request, res: Response) =>  {
	findAllCourses()
		.then(_.partial(onSuccess, res))
		.catch(_.partial(onError, res, "Find All Courses Failed!"));
};