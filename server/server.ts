import * as express from 'express';
import { Application } from 'express';// type interface of express Application
import { initRestApi } from "./api/api";
import { apiErrorHandler } from './api/apiErrorHandler';

const app: Application = express();
const port: number = 8090;

initRestApi(app);

app.use(apiErrorHandler);

app.listen(port, () => {
	console.log(`Server running on localhost:${port}`);
})