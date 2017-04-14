
import { CourseModel } from "./models/models";

CourseModel.findAll().then(results => console.log(JSON.stringify(results, null, 2)));
