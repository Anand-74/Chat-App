import jwt from "jsonwebtoken";
import User from "../models/user.model.js";    

export const protectRoute = async(req,res,next)=>{
         try{
            const token = req.cookies.jwt;

             if(!token){
                return res.status(401).json({
                    message: "Unauthorized -No Token Provided",
                })
             }
        const decoded = jwt.verify(token ,process.env.JWT_SECRET);
         
        if(!decoded){
         return res.status(401).json({ message : "Unauthorized -Invalid Token" });
        }
     // either it is decoded.id or decoded.userId depending on how you set the payload in the token
        const user = await User.findById(decoded.id).select("-password");

        if(!user){
        return res.status(401).json({ message : "User Not Found" });
        }
        req.user = user; // Attach kari hai  user information request object se 
        

        next();
     }
         catch(error){
     
     console.log("Error in protectedRoute middleware :", error.message);
     res.status(500).json({
        message: "Internal Server Error"
     })
        }
};






















