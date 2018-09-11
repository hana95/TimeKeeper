import mongoose from 'mongoose'
const EmployeeSchema = new mongoose.Schema({
name:{
    type: String,
    trim:true,
    required:'Name is required'
    
},
surname:{
    type: String,
    trim:true,
    required:'Surname is required'
    
},
age:number,
email: {
type: String,  
trim: true,  
unique: 'Email already exists',  
match: [/.+\@.+\..+/, 'Please fill a valid email address'],  
required: 'Email is required' 
},
phone:String
}) 

export default mongoose.model('Employee', EmployeeSchema)
