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

const router = require('./router/index');
app.use(router);

app.listen(1000,function(){
    console.log("1000Port Server is start")
})





