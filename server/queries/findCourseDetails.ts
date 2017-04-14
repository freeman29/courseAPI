import { CourseModel, LessonModel } from "../models/models";

export const findCourseDetails =  (courseId:number) =>  {
	return CourseModel.findById(courseId, {
		include: [{model: LessonModel}]
	});
};