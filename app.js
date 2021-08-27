const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    port : '1000',
    user : 'root',
    password : '1234',
    database : 'NodeProject'
})

app.use(express.static('public'));

app.listen(1000,function(){
    console.log("1000Port Server is start")
})

app.get('/',function(req,res){
    console.log("This is login page");
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
    res.send("<h1>This is MyPage! ReaalyWelcome!</h1>");
})