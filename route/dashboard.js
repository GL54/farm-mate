const express = require('express')
const path = require('path')
app           = express.Router()

const multer  = require('multer')

const storage= multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null, './upload')
    },
    filename:(req,files,cb)=>{
        cb(null,files.originalname)
    }
})

app.get('/dashboard',(req,res)=>{
    res.render("dashboard")
})

const upload=multer({storage: storage})

app.post('/dashboard',upload.single('image'),(req,res)=>{
    console.log(req.file,req.body)
 res.send("Image uploaded")
rs
})
module.exports = app