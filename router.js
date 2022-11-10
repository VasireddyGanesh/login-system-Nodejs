const e = require('express')
var express = require("express")
var router = express.Router();

router.post('/login',(req,res)=>{
    if(req.body.email =='admin@gmail.com' && req.body.password =='admin'){
        req.session.user = req.body.email
        // res.redirect('/dashboard')
        console.log(req.body.email,req.body.password)
        res.end("Login Success")
    }else{
        console.log(req.body.email,req.body.password)
        res.end("Invalid User")
    }
});

module.exports = router