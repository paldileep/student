
const express = require('express')
const router = express.Router()

const { createStudent } = require('../controllers/userLogin')

router.post('/create', createStudent)


module.exports = router