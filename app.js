const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

// static한 파일들은 여기서 다 가져와라!
app.use(express.static('public'));

// express야 나 bodyparser를 사용할 건데, 
// 이게 클라이언트 측에서 json 형태로 올 수도 있고 
app.use(bodyparser.json());
// 다른 형태로 올 수도 있어!라는 뜻 _ 인코딩 안되어 있으며 인코딩해서 보내줘!
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');

const login = require('./router/login')
app.use('/login', login);

const email = require('./router/email')
app.use('/email', email);

const join = require('./router/join')
app.use('/login/join', join);

app.listen(1000,function(){
    console.log("1000Port Server is start")
})

app.get('/',function(req,res){
    console.log("This is login page");
    //res.send("<h1>Hi, Hwojeong!</h1>");
    res.sendFile(path.join(__dirname,"../NodeJS_Project/public/welcomePage.html"));
})

app.get('/LostPassword',function(req,res){
    console.log("Find Password");
    res.send("<h1>Find Password!!!</h1>");
})




