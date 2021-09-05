const express = require('express');
const app = express();
const router = express.Router();

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host : 'localhost',
//     port : 3306,
//     user : 'root',
//     password : '1234',
//     database : 'NodeProject'
// })
// 연결을 시작하자!
//connection.connect();

router.post('/ajax',(req,res)=>{
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

module.exports = router;