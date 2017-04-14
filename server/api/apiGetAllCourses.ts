import * as _ from 'lodash';
// type interface of express Request, Response
import { Request, Response } from 'express';
import { findAllCourses } from "../queries/findAllCourses";
import { onError } from './onError';

export const apiGetAllCourses = (req: Request, res: Response) =>  {
	findAllCourses()
		.then(results => res.status(200).json(results))
		.catch(_.partial(onError, res, "Find All Courses Failed!"));
};