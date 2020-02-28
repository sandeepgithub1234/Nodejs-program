var mysql = require('mysql');  
var con = mysql.createConnection({  
  host: "database-4.cu59gsoyy27r.us-east-2.rds.amazonaws.com",  
  user: "admin4",  
  password: "password4"  
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  