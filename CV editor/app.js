const express = require('express')
require('dotenv').config()
require("./db");

const userRouter = require('./routes/user')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
  })
