import { CourseModel } from "../models/models";

export const findAllCourses =  () =>  {
	return CourseModel.findAll({
		order: ['seqNo']
	})
};
