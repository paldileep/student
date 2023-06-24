const express = require('express')
const app = express()
const cors = require('cors')

const errorHandler = require('./utils/error/errorHandler')

require('dotenv').config()

app.use(cors())

app.use(express.json())

require('./config/database')

const all = require('./routes')

app.use('/', all)

app.use(errorHandler)

const port = process.env.PORT || 5001

app.listen(port , ()=> { 

      console.log(`server is running on ${port}`)
})


