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
        host: 'my-cache-cluster.pocyw8.ng.0001.use2.cache.amazonaws.com',
        port: 6379,
        password: 'Ishtiaq123',
        tls: {
            ca: fs.readFileSync('C:\Users\SANDY\Downloads\AWS INFO\mycacheinstance.pem')
        }
    });

    ping();
}
catch (e) {
    console.log('Error: ', e);
}