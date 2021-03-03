const mongoose=require('mongoose')
const Schema=mongoose.Schema

//create schema(structure of document)
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    std:{
        type:String,
        required:true
    },
    div:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    image:{
        type:String,
        requied:true
    }
}
)

//create model(collections)
const Userprofile=mongoose.model('Userprofile',userSchema)

//export model and schema to use elsewhere
module.exports=Userprofile