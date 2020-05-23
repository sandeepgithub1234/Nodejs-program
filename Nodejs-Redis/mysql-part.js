var mysql = require('mysql');

let dataa = [];



var con = mysql.createConnection({
    host: "xxxxxxxxxxxxxxxxxxxxx",
    user: "admin4",
    password: "paxxxxxxx",
    database:"jaxxxx"
  });

  
var connectmysql= con.connect(async function(err) {
    if (err) throw err;
    console.log("Connected with mysql!");
    var sql='select * from employees';
   
    try {
           var convalue=con.query(sql,function(err,result){
            if(err) throw err;
            dataa.push(result);
            console.log('result \n\n',JSON.stringify(result));
            //console.log('\n\n\nResult in array form:\n\n',dataa);
            
        })
       
 
        
    }
    catch(err) {
        console.log('error: ',err);
    }

    
    
  });
  
 // console.log('connect mysql',connectmysql);
  module.exports={
    connectmysql,
    con
  }
