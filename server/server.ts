import { findAllCourses } from "./queries/findAllCourses";
import * as express from 'express';
import { Application } from 'express';// type interface of express

const app: Application = express();
const port: number = 8090;

app.route('/api/courses')
	.get((req, res) => {
		findAllCourses().then(results => res.status(200).json(results));
	})

app.listen(port, () => {
	console.log(`Server running on localhost:${port}`);
})