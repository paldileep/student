
const studentModel = require('../models/studentModel')
const ErrorMaker = require('../utils/error/ErrorMaker')

exports.createStudent = async (req, res, next) => { 
    
    try {

        const { email , password } = req.body

        const result = await studentModel.create({email})

        if(result){
            res.status(200).json(result)
        }
        else{ 
            next(new ErrorMaker('student creation failed', 500))
        }

        

    } catch (error) {
        
        next(new ErrorMaker(error, 400))
    }

    
}