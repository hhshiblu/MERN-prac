const mongoose=require("mongoose")
const UserinfoSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
     level:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    tid:{
        type:Number,
        require:true
    },
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const User =new mongoose.model("User",UserinfoSchema)

module.exports=User;