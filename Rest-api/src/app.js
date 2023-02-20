const express=require("express");
const app=express();
const port=8000;

require("../database/index");
const Student =require("../modal/Schema")

app.use(express.json())
app.get("/", (req,res)=>{
    
    res.send("this is post student");
})

app.post("/student", async(req,res)=>{
         
try{
    const user=new Student(req.body) ;
    console.log(user);
    const createdata= await user.save()
    res.status(201).send(createdata)
}
catch(err){res.status(400).send(err)
}       
})
app.get("/student", async(req,res)=>{
         
    try{
        const user= await Student.find() ;
        
        res.status(201).send(user)
    }
    catch(err){res.status(400).send(err)
    }       
    })


app.listen(port,()=>{
       console.log(`connect server on http://localhost:${port}`)
})
