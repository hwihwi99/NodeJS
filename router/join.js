const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/login/join',function(req,res){
    console.log("Let's join page!");
    res.sendFile(path.join(__dirname,"../public/join.html"));
})

module.exports = router;