var mysql = require('mysql');  
var con = mysql.createConnection({  
    host: "database-4.cu59gsoyy27r.us-east-2.rds.amazonaws.com",  
    user: "admin4",  
    password: "password4" ,
    database: "javatpoint"   
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
var sql="select * from employees where city='Mumbai' ";
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log();  
});  
// select query
var list_city=['Delhi','CA','Las Vegas'];
var listall=[];
var record={};
con.query("select * from employees ", function (err, result) {  

    if (err) throw err;  
    console.log('mysql record',result); 
    
    var k;
    var i;
    var j;
   
    for(j=0;j<=2;j++)
    {       listall[j]={};
             i=0;
             k=0;
            for (i = 0; i < result.length; i++) {
                if(result[i].city===list_city[j])
                    {
                        listall[j][k++]=result[i];
                    }
            };
            if(j===0){
                record.Delhi=listall[j];
                console.log('Record of ',list_city[j],'is',listall[j]);
            }
           else if(j===1){
                record.CA=listall[j];
                console.log('Record of ',list_city[j],'is',listall[j]);
            }
            else{
                record.LasVegas=listall[j];
                console.log('Record of ',list_city[j],'is',listall[j]);
            }
            
     };
     console.log('\n \n all record of city in hashmap is\n\n',record);
    });  
    
});  
