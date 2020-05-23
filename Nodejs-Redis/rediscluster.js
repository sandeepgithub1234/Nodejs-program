
/*
var redis = require("redis");
client = redis.createClient(6379, 'my-cache-cluster.pocyw8.ng.0001.use2.cache.amazonaws.com', {}); 
client.hget('name',(err,result)=>{
  if(err){
    console.log(err)
  }
  console.log(result);
});
*/
/*
var RedisClustr = require('redis-clustr');
var RedisClient = require('redis');


var redis = new RedisClustr({
    servers: [
        {
            host: 'my-cache-cluster.pocyw8.ng.0001.use2.cache.amazonaws.com',
            port: 6379
        }
    ],
    createClient: function (port, host) {
        // this is the default behaviour
        return RedisClient.createClient(port, host);
    }
});
console.log('sandeep');
//connect to redis
redis.on("connect", function () {
  console.log("connected");
});

//check the functioning
redis.set("framework", "AngularJS", function (err, reply) {
  console.log("redis.set " , reply);
});

redis.get("framework", function (err, reply) {
  console.log("redis.get ", reply);
});
*/
const Redis = require('ioredis');

const nodes = [{
  host: 'my-cache-cluster.pocyw8.ng.0001.use2.cache.amazonaws.com',
  port: '6379',
}];


const options = {
  dnsLookup: (address, callback) => callback(null, address),
  redisOptions: {
      tls: {}
  }
}



const cluster = new Redis.Cluster(nodes, options);

cluster.set('aws', 'test');

cluster.get('aws', function (err, res) {
    console.log(res);

    if (err) {
        console.error(err)
    }

    cluster.disconnect()
});
/*
dnsLookup(hostname) {
    return new Promise((resolve, reject) => {
        console.log(this.options.dnsLookup.toString());

        this.options.dnsLookup(hostname, (err, address) => {
            if (err) {
                debug('failed to resolve hostname %s to IP: %s', hostname, err.message);
                reject(err);
            } else {
                debug('resolved hostname %s to IP %s', hostname, address);
                resolve(address);
            }
        });
    });
}
*/
