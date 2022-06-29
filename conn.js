const mongoose=require("mongoose");





mongoose.connect("mongodb://localhost:27017/users").then(()=>{
    console.log("connection established")
}).catch( (error)=>{
    console.log(error)
})


