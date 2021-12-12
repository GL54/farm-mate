const app = require('express').Router()


app.get('/language',(req,res)=>{
    res.render('lang')


})

module.exports=app