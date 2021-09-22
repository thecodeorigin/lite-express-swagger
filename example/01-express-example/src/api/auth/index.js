const express = require("express");

const app = express.Router();

app.get('/', function (req, res) {
  return res.send('Hello World');
});

module.exports = {
  authRouter: app
}
