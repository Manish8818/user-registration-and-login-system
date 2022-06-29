
const express= require("express");
const app = express();
const port= process.env.Port||2000;
const User=require("./models/user")

require("./db/conn")
app.use(express.json());

app.post("/registration", async(req,res)=>{  
    try {

        const newUser= new User(req.body);
    console.log(newUser);
         const saveUser= await newUser.save();
         res.send(saveUser);

        
    } catch (error) { res.send(error)
        
    } 
   

    
})

    app.post("/login", async ( req,res)=>{ 

    try {  const email=req.body.email;
        const password= req.body.password;

        console.log(email)
        console.log(password)

        const useremail= await User.findOne({email:email})
        
        console.log(useremail);

        if(useremail.password===password){
            res.status(201).send("user exist")}
        else {
                res.send("invalid user details")
            }

        
    }
     catch (error) {res.status(400).send("invalid email");
        
    }
    
    })

app.listen(port, ()=>{
    console.log(`listening to the port${port}`);
})