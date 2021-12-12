const express =  require('express')

app     = express.Router()

app.get('/signup',(req,res)=>
{
    res.render('signup')

})

app.post('/signup',(req,res)=>{

    let data=req.body
    console.log(data)
    if(data)
    {
     console.log(data)
     res.redirect('/signup')
    }
    else{
        console.log('error in server') 
        res.send("error")
    }
})


module.exports=app