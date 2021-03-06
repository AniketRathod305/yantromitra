const mongoose=require('mongoose')
const Schema=mongoose.Schema

//create schema(structure of document)
const teacherloginSchema=new Schema({
    emailid:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        requied:true
    },
    cpassword:{
        type:String,
        requied:true
    },
    name:{
        type:String,
        
    },
    age:{
        type:Number,
        
    },
    dob:{
        type:Date,
        
    },
    qualification:{
        type:String,
        
    },
    image:{
        type:String,
        
    }
}
)

//create model(collections)
const Teacherlogin=mongoose.model('Teacherlogin',teacherloginSchema)

//export model and schema to use elsewhere
module.exports=Teacherlogin