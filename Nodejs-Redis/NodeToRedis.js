const express=require('express');
const fetch=require('node-fetch');
const redis=require('redis');
var mysql = require('mysql');

var res='san';
var result1="kjsjdhkjd";
var reslt=[];
const PORT=process.env.PORT ||5000;
const REDIS_PORT=process.env.PORT || 6379;
const client=redis.createClient(REDIS_PORT);
const app=express();
++++++++++  
var con = mysql.createConnection({
    host: "database-4.cu59gsoyy27r.us-east-2.rds.amazonaws.com",
    user: "admin4",
    password: "password4",
    database:"javatpoint"
  });

var query='234';
var connectmysql= con.connect(async function(err) {
    if (err) throw err;
    console.log("Connected with mysql!");
    var sql='select * from employees where city="Las Vegas"';
    query=sql;
    try {
           var convalue=con.query(sql,function(err,result){
            if(err) throw err;
            reslt.push(result);
            console.log('result \n\n',JSON.stringify(result));
            //console.log('\n\n\nResult in array form:\n\n',dataa);
            
        })
    }
    catch(err) {
        console.log('error: ',err);
    }

    
    
  });
  
  
  function setResponse(username,repos)
  {
    return `<h1> Key:  ${username} <br/><br/>  ${repos}  </h1>`
  }

app.use("/repos/:query",(req,res,next) => {

next();
})
async function getRepos(req,res,next){
    try {
        console.log('Fetching Data...');
        const {username}=req.params;
        const response=await fetch(`https://api.github.com/users/${username}`);
        const data=await response.json();
        const repos=JSON.stringify(reslt[reslt.length-1]);
        // console.log(data);
        console.log('response',repos);
        //set data  to redis
        client.setex(query,3600,repos);
        
        res.send(setResponse(username,repos));
    } catch (error) {
        console.error('erooor',error);
        res.status(501);
    }
}

//cache middleware
function cache(req,res,next){
    const {username}=req.params;
    client.get(username,(err,data)=>{
        if(err) throw err;
        if(data!=null){
            res.send(setResponse(username,data));
        }
        else{
            next();
        }
    })
}

app.get('/repos/:username',cache,getRepos);
app.listen(5000,()=>{
    console.log(`app listening on ${PORT}`);
    
})
