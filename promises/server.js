var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('hi sushant'); //write a response to the client
  res.end(); //end the response
}).listen(8080); 
/*
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2020&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); 
*/