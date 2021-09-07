const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const crypto = require('crypto');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '1234',
    database : 'now'
})

router.get('/',function(req,res){
    console.log("Let's join page!");
    res.sendFile(path.join(__dirname,"../public/join.html"));
})

router.post('/',function(req,res){
    var email = req.body.email
    var password = req.body.password
    var name = req.body.name;
    var dbpw = crypto.createHash("sha512").update(password).digest('base64');
    var query = connection.query('insert into now_user(email,pw,user_name) VALUES (?,?,?)',[email,dbpw,name],(err,rows)=>{
        if(err){
            throw err;
        }
        console.log("data insert");        
    })
    res.redirect('/')
})

module.exports = router;