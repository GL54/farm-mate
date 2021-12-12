const app = require('express').Router()


app.get('/select',(req,res)=>{
    res.render('select')
  

})

module.exports=app