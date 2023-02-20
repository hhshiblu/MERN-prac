const mongoose=require("mongoose")
mongoose.set('strictQuery', true)

mongoose.connect("mongodb://0.0.0.0:27017/UserInfo")
.then(()=> console.log("conncet success"))
.catch((err)=>{console.log(err)})


// .then(()=>{"conncet success"})
// .catch((err)=>{console.log(err)})
// mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://0.0.0.0:27017/").then(()=>console.log("success")).catch(err=>console.log(err));