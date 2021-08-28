const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const connection = mysql.createConnection({
    host : 'localhost',
    port : '1000',
    user : 'root',
    password : '1234',
    database : 'NodeProject'
})

// static한 파일들은 여기서 다 가져와라!
app.use(express.static('public'));

app.listen(1000,function(){
    console.log("1000Port Server is start")
})

app.get('/',function(req,res){
    console.log("This is login page");
    //res.send("<h1>Hi, Hwojeong!</h1>");
    res.sendFile(path.join(__dirname,"../NodeJS_Project/public/welcomePage.html"));
})

app.get('/login',function(req,res){
    console.log("This is login page");
    //res.send("<h1>Hi, Hwojeong!</h1>");
    res.sendFile(path.join(__dirname,"../NodeJS_Project/public/welcomePage.html"));
})

app.get('/join',function(req,res){
    console.log("Let's join page!");
    res.sendFile(path.join(__dirname,"../NodeJS_Project/public/join.html"));
})

app.get('/LostPassword',function(req,res){
    console.log("Find Password");
    res.send("<h1>Find Password!!!</h1>");
})

app.post('/login',function(req,res){
    console.log("Login_Success");
    res.send("<h1>This is MyPage! ReallyWelcome!</h1>");
})

// passport 사용하기

passport.serializeUser((user,done)=>{
    console.log('passport session save : ', user.id);
    return done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    console.log('passport session get id : ', id);
    done(null,id);
})

// passport.use('local-joij', new LocalStrategy({
//     usernameField : 'email',
//     passwordField : 'password',
//     session : true,
//     passReqToCallback : false
// },function(res,email,password,done)=>{
//     var query = connection.query('select * from user where')
// }))
