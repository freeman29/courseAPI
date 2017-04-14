import * as express from 'express';
import { Application } from 'express';// type interface of express
import { apiGetAllCourses } from './apiGetAllCourses';

export const initRestApi = (app: Application) =>  {
	app.route('/api/courses').get(apiGetAllCourses);
};
