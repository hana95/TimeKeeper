import mongoose from 'mongoose'
const CustomerSchema = new mongoose.Schema({
businessName:{
    type: String,
    trim:true,
    
},
contactName:{
    type: String,
    trim:true,
    required:'Contact name is required'
    
},

email: {
type: String,  
trim: true,  
unique: 'Email already exists',  
match: [/.+\@.+\..+/, 'Please fill a valid email address'],  
required: 'Email is required' 
},

status:String
}) 

export default mongoose.model('Employee', EmployeeSchema)
