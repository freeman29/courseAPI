// type interface of express Request, Response
import { Response } from 'express';

const hri = require('human-readable-ids').hri

export const databaseErrorHandler = (res: Response, err: any) =>  {
  const _id = hri.random();
  console.log('Database error occured: ', _id, err);
  res.status(500).json({
    code: 'ERR-002', 
    message: `Creation of lesson failed, error code ${_id}`
  });
};