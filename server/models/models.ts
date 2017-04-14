import * as ORM from 'sequelize';
import {Sequelize} from 'sequelize'; // type interface of sequelize
import { initCourseModel } from './initCourseModel';
import { initLessonModel } from './initLessonModel';

const DB_URL = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course'; 

const sqlz : Sequelize = new ORM(DB_URL);

export const CourseModel = initCourseModel(sqlz);
export const LessonModel = initLessonModel(sqlz);

CourseModel.hasMany(LessonModel, {foreignKey: 'courseId'});
LessonModel.belongsTo(CourseModel, {foreignKey: 'courseId'});