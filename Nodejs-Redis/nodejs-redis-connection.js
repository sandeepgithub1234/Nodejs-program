var Redis = require('ioredis');
var fs = require('fs');

var ping = function(e) {
    var result = client.ping()
        .then(function(e) {
            console.log(client);
            console.log('Connected!');
        })
        .catch(function(e) {
            console.log('Error:', e);
        })
        .finally(function() {
            client.quit();
        });
};

try {
    var client = new Redis({
        host: 'my-cacxxxxxxxxxxxxxxxxxxxxxxxxxamazonaws.com',
        port: 6379,
        password: 'Ixxxxxxxxxxxxxxx',
        tls: {
            ca: fs.readFileSync('C:\Users\SANDY\Downloads\AWS INFO\myxxxxxxxxxx.pem')
        }
    });

    ping();
}
catch (e) {
    console.log('Error: ', e);
}
