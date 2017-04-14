import * as express from 'express';
import { Application } from 'express';// type interface of express
import { apiGetAllCourses } from './apiGetAllCourses';
import { apiGetCourseDetails } from './apiGetCourseDetails';

export const initRestApi = (app: Application) =>  {
	app.route('/api/courses').get(apiGetAllCourses);
	app.route('/api/courses/:id').get(apiGetCourseDetails);
};
