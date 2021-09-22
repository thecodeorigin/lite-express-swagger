import * as express from 'express';
import swaggerConfig from './swagger.config';
import { authRouter } from './api/auth';
import { userRouter } from './api/users';

const app = express();
const PORT = 3000;

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

swaggerConfig(app);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
