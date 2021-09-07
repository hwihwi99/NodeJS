const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
// 
router.get('/',function(req,res){
    console.log("login_router is work");
    //res.send("<h1>Hi, Hwojeong!</h1>");
    res.sendFile(path.join(__dirname,"../public/welcomePage.html"));
})

router.post('/login',function(req,res){
    // 전송된 값이 req.body를 통해서 옵니다.
    console.log(req.body.email);
    console.log(req.body.password);
    //res.send("<h1>This is MyPage! ReallyWelcome!"+req.body.email+"</h1>");
    
    // ejs를 사용하려면 render를 사용합니다!
    res.render('email.ejs',{'email': req.body.email, 'password' : req.body.password});
})

router.get('/join',function(req,res){
    res.redirect('/join');
})

module.exports = router;