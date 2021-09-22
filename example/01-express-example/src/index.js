const express = require("express");
const swaggerConfig = require("./swagger.config.js");
const { authRouter } = require("./api/auth");
const { userRouter } = require("./api/users");

const app = express();
const PORT = 3000;

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

swaggerConfig(app);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
