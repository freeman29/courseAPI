import * as ORM from 'sequelize';
import {Sequelize} from 'sequelize'; // type interface of sequelize
import { initCourseModel } from './initCourseModel';

const DB_URL = 'postgres://postgres:postgres@localhost:5432/complete-typescript-course'; 

const sqlz : Sequelize = new ORM(DB_URL);