const app = require('express').Router()


app.get('/customer',(request,responce)=>{
    responce.render('customer')

})

module.exports=app