const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/teacher").then(()=>console.log("success")).catch(err=>console.log(err));

// schema create

const teacherSchema=new mongoose.Schema({
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

const TeacherInfo=new mongoose.model("TeacherInfo",teacherSchema);

const document= async()=>{
    try{
        const teacherinfo=new TeacherInfo({
            name:"Ziaual Haque Shimul",
            level:"high",
            age:22,
            tid:4748,
            active:true
      })
      
       teacherinfo.save();
    }catch(err){
        console.log(err);
    }
}
document();
