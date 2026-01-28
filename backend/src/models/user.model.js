import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    fullName:{
        type:String,  
        required:true,
    },
    email:{
        type:String,  
        required:true,
        unique:true,                
    },
    password:{
        type:String,  
        required:true,
        minlength:6,
    },
    profilePic:{
        type:String,
        default:"",   
    },    
    createdAt: {
        type: Date,
        default: Date.now,
    },
 },
 { timestamps: true }
);


export default mongoose.model('User',userSchema);   



//26 min