const mongoose=require('mongoose')
const Schema=mongoose.Schema

//create schema(structure of document)
const teacherprofileSchema=new Schema({
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
    qualification:{
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
const Teacherprofile=mongoose.model('Teacherprofile',teacherprofileSchema)

//export model and schema to use elsewhere
module.exports=Teacherprofile