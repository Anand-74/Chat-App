

export const getUserForSidebar = async(req,res)=>{
    const userId = req.user._id;    
    try{
        const users = await User.find({_id: {$ne: userId}}).select("fullName profilePic email");
        res.status(200).json(users);
    }
    catch(error){
        console.log("Error in getUserForSidebar controller",error.message);
        res.status(500).json({
             message: "Internal Server Error"
        })
    }
}    
