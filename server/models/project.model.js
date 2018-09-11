import mongoose from 'mongoose'
const ProjectSchema = new mongoose.Schema({
projectName:{
    type: String,
    trim:true,
    required:'Project name is required'
    
},
customerName:{
    type: String,
    trim:true,
    required:'Customer name is required'
    
},

teamName:{
    type: String,
    trim:true,
    required:'Team name is required'
    
},

status:String
}) 

export default mongoose.model('Employee', EmployeeSchema)
