const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '1234',
    database : 'NodeProject'
})
// 연결을 시작하자!
connection.connect();

// static한 파일들은 여기서 다 가져와라!
app.use(express.static('public'));

// express야 나 bodyparser를 사용할 건데, 
// 이게 클라이언트 측에서 json 형태로 올 수도 있고 
app.use(bodyparser.json());
// 다른 형태로 올 수도 있어!라는 뜻 _ 인코딩 안되어 있으며 인코딩해서 보내줘!
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');

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
    // 전송된 값이 req.body를 통해서 옵니다.
    console.log(req.body.email);
    console.log(req.body.password);
    //res.send("<h1>This is MyPage! ReallyWelcome!"+req.body.email+"</h1>");
    
    // ejs를 사용하려면 render를 사용합니다!
    res.render('email.ejs',{'email': req.body.email, 'password' : req.body.password});
})

app.post('/ajax_send_email',(req,res)=>{
    var email = req.body.email;
    var responseData={};
    
    var query = connection.query('select name from user where email="'+email+'"',
    (err,rows)=>{
        if(err){
            throw err;
        }
        if(rows[0]){
            responseData.result="ok";
            responseData.name = rows[0].name;
        }else{
            responseData.result="none";
            responseData.name = "";
        }
        res.json(responseData);
    })
    //console.log(req.body.email);
    //var responseData = {'result' : 'ok','email':req.body.email};
    //res.json(responseData);
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
