const mongoose= require("mongoose");


userSchema= new mongoose.Schema({
name:String,

email:String,
password:String,
   
cpassword:String
}
    
)
const User= mongoose.model("User",userSchema);
 module.exports=User;