import * as _ from 'lodash';
// type interface of express Request, Response
import { Request, Response } from 'express';
import { findCourseDetails } from "../queries/findCourseDetails";
import { onError } from './onError';
import { onSuccess } from './onSuccess';

export const apiGetCourseDetails = (req: Request, res: Response) =>  {
	const courseId = parseInt(req.params.id);
	
	findCourseDetails(courseId)
		.then(_.partial(onSuccess, res))
		.catch(_.partial(onError, res, "Could not find course details for ID Failed!"));
};