import { LessonModel } from '../models/models';

export function createLesson(props: any) {
  return LessonModel.create(props);
}