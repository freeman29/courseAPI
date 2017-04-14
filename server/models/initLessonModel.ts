import * as ORM from 'sequelize';
import {Sequelize} from 'sequelize'; // type interface of sequelize

export const initLessonModel = (sequelize: Sequelize) =>  {
	return sequelize.define('Lesson', {
		url: ORM.STRING,
		description: ORM.STRING,
		duration: ORM.STRING,
		seqNo: ORM.INTEGER,
		courseId: ORM.INTEGER,
		pro: ORM.BOOLEAN,
		tags: ORM.STRING,
		gitHubUrl: ORM.STRING
	});
};
