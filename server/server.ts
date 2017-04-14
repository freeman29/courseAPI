import { findAllCourses } from "./queries/findAllCourses";

findAllCourses().then(results => console.log(JSON.stringify(results, null, 2)));