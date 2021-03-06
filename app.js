//import express
const express=require('express')


const port=process.env.PORT || 3000
//import mongoose
const mongoose=require('mongoose')

//import our model and schema

const Userlogin=require('./models/userlogin')
const Teacherlogin=require('./models/teacherlogin')


//import multer
const multer=require('multer')

const fs=require('fs')

//create express app
const app=express()

//import path
const path=require('path')

//register view engine
app.set('view engine','ejs')

//middleware
app.use(express.urlencoded({extended:true}))


// connect mongo db using mongoose
const dbURI='mongodb+srv://aniket:test1234@cluster0.vzciz.mongodb.net/users?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB_URI || dbURI, { useNewUrlParser: true, useUnifiedTopology: true }  )
.then((result)=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log(err)
})

//middleware to identify static files
app.use(express.static('./uploads/'))

//define storage for images
const storage=multer.diskStorage({
    //destination for files
    destination: function (req, file, callback) {
        callback(null, "uploads");
    },
    //add back the extension
    filename:function(req,file,callback){
        callback(null,Date.now()+path.extname(file.originalname))
    }
})


//upload parameters for multer
const upload=multer({
    storage:storage, 
}).single('image')




//configure requests
app.get('/',(req,res)=>{
    res.render('front')
})


app.get('/register',(req,res)=>{
    res.render('register')
})

app.get('/login1',(req,res)=>{
    res.render('login1')
})




//display all user profiles to teacher
app.get('/display',(req,res)=>{
    //read user profiles
    
    Userlogin.find()
    .then((result)=>{
        res.render('display',{users:result})
    })
    .catch((err)=>{
        console.log(err)
    })
 
})





app.post('/submit1',upload,(req,res)=>{
  
    //initiate user registration
    const password=req.body.password
    const cpassword=req.body.cpassword
    if(password===cpassword)
    {
    console.log(req.body)
    const record1=new Userlogin({
        emailid:req.body.emailid,
        password:req.body.password,
        cpassword:req.body.cpassword,
        name:req.body.name,
        age:req.body.age,
        dob:req.body.dob,
        std:req.body.std,
        div:req.body.div,
        rollno:req.body.rollno,
        image:req.file.filename
    })
      record1.save()
      .then((result)=>{
          res.render('welcome',{users:result})
      })
      .catch((err)=>{
          console.log(err)
      })
  }
    else{
      res.send('password & confirm password do not match')
    }
})


app.post('/submit3',upload,(req,res)=>{
  
    //initiate teacher registration 
    const password=req.body.password
    const cpassword=req.body.cpassword
    if(password===cpassword)
    {
    console.log(req.body)
    const record1=new Teacherlogin({
        emailid:req.body.emailid,
        password:req.body.password,
        cpassword:req.body.cpassword,
        name:req.body.name,
        age:req.body.age,
        dob:req.body.dob,
        qualification:req.body.qlf,
        image:req.file.filename

    })
      record1.save()
      .then((result)=>{
          res.render('welcome1',{user:result})
      })
      .catch((err)=>{
          console.log(err)
      })
  }
    else{
      res.send('password & confirm password do not match')
    }
})


//verify user login
app.post('/submit2',(req,res)=>{
    
    const email=req.body.emailid
    const password=req.body.password
    Userlogin.findOne({emailid:email})
    .then((result)=>{
        if(result.password===password){
            res.render('welcome',{users:result})
        }
        else{
            res.send('invalid login credential')
        }
    })
    .catch((error)=>{
        res.send('invalid login credentials')
    })
})

//verify teacher login
app.post('/submit4',(req,res)=>{
    
    const email=req.body.emailid
    const password=req.body.password
    Teacherlogin.findOne({emailid:email})
    .then((result)=>{
        if(result.password===password){
            res.render('welcome1',{user:result})
        }
        else{
            res.send('invalid login credential')
        }
    })
    .catch((error)=>{
        res.send('invalid login credentials')
    })
    
})



//server listening for requests at port 3000
app.listen(port,()=>{
    console.log('listening on port 3000')
})
