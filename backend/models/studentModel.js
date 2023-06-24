const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema( { 

      email: { 
        type: String, 
        required : true, 
        unique: true
      },

      password: { 
        type: String, 
        required: true
      }
} )

const StudentModel = mongoose.model('stud', studentSchema)

module.exports = StudentModel
