const mongoose=require('mongoose')
const Schema=mongoose.Schema

//create schema(structure of document)
const userloginSchema=new Schema({
    username:{
        type:String,
        required:true
    },
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
    }
}
)

//create model(collections)
const Userlogin=mongoose.model('Userlogin',userloginSchema)

//export model and schema to use elsewhere
module.exports=Userlogin