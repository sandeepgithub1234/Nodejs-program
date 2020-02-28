var redis = require('redis');
var client = redis.createClient();
var client = redis.createClient(6379, '127.0.0.1');
client.on('connect', function() {
    console.log('connected');
});
var str='sss';
 client.hmset('employee', 'mumbai', '{sandeep,mca,336},{sushant,mca,23},{mallika,mca,2342}', 'Delhi', '[{sandeep1,mca,336},{sushant1,mca,23},{mallika1,mca,2342}]');
client.hget('employee', 'Delhi',function(err, reply) {
   // console.log(reply);
   str=reply;
  // console.log(str);
  });
  console.log(str);
/*
  client.hgetall('frameworks', function(err, object) {
      console.log(object);
  });
  client.rpush(['frame', 'angularjs', 'backbone'], function(err, reply) {
    console.log(reply); //prints 2
});

client.lrange('frame', 0, 1, function(err, reply) {
    console.log(reply); // ['angularjs', 'backbone']
});
*/