import * as express from 'express';

const app = express.Router();

app.get('/', function (req, res) {
  return res.send('Hello World');
});

export const userRouter = app;
