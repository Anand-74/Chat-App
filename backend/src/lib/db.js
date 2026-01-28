import mongoose from 'mongoose';

export const connectdb = async()=>{
    try{
    const conn = await mongoose.connect(process.env.MONGODB_URI);
     console.log(`database connected successfully: ${conn.connection.host}`);
    }
    catch(err){
        console.log("Database connection failed",err);
    } 
}