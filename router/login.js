const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '1234',
    database : 'now'
})
//연결을 시작하자!
connection.connect();

router.get('/',function(req,res){
    console.log("login_router is work");
    //res.send("<h1>Hi, Hwojeong!</h1>");
    res.sendFile(path.join(__dirname,"../public/welcomePage.html"));
})

router.post('/',function(req,res){
    var email = req.body.email;
    var password = req.body.password;

    var query = connection.query('select * from now_user where email = ? and pw = ?',[email,password],(err,rows)=>{
        if(err){
            throw err;
        }
        if(rows[0]){
            console.log('login success');
            res.render('home.ejs',{name:rows[0].user_name});
        }else{
            console.log('login fail');
            res.redirect('/');
        }
    })
})

router.get('/join',function(req,res){
    res.redirect('/join');
})

module.exports = router;