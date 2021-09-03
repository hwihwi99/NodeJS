const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const login = require('./login')
router.use('/login', login);

const email = require('./email')
router.use('/email', email);

const join = require('./join')
router.use('/login/join', join);

router.get('/',function(req,res){
    console.log("This is login page from router");
    //res.send("<h1>Hi, Hwojeong!</h1>");
    res.sendFile(path.join(__dirname,"../public/welcomePage.html"));
})

module.exports = router;
