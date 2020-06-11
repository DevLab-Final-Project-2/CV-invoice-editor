const express = require('express')
const expressWinston = require('express-winston');
const winston = require('winston');
require('dotenv').config()
require("./db");

const userRouter = require('./routes/user')

const app = express()

app.use(expressWinston.logger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD.MM.YYYY HH:mm:ss'
    }),
    winston.format.colorize(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({filename: 'logs/activity/activity.log'})
  ],
  expressFormat: true,
  level: 'info'
}));

app.use(express.json())
app.use(userRouter)


app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.File({filename: 'logs/error/error.log'})
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
  })
