const mongoose=require('mongoose')
const Schema=mongoose.Schema

//create schema(structure of document)
const userloginSchema=new Schema({
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
    std:{
        type:String,
        
    },
    div:{
        type:String,
       
    },
    rollno:{
        type:String,
        
    },
    image:{
        type:String,
       
    }

}
)

//create model(collections)
const Userlogin=mongoose.model('Userlogin',userloginSchema)

//export model and schema to use elsewhere
module.exports=Userlogin