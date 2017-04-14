import * as ORM from 'sequelize';
import {Sequelize} from 'sequelize'; // type interface of sequelize
import { initCourseModel } from './models/initCourseModel';

const DB_URL = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course'; 

const sqlz : Sequelize = new ORM(DB_URL);

const CourseModel = initCourseModel(sqlz);

CourseModel.findAll().then(results => console.log(JSON.stringify(results, null, 2)));