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

module.exports = router;