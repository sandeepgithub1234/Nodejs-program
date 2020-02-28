const MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Data',{ useUnifiedTopology: true },(err,client)=>{
    var db=client.db('Data');
if(err)
    {
        return console.log('Unable to connect mongodb server');
    }
    console.log('Connect to mongodb server');
    const doc1 = { "name": "khokho", "category": "sports", "quantity": 35, "reviews": [] };
    const doc2 = { "name": "kabaddi",   "category": "sports", "quantity": 40, "reviews": [] };
    db.collection('Todos').insertMany([doc1, doc2])
    .then(result => {
      console.log(`Successfully inserted ${result.insertedIds.length} items!`);
      console.log(result.ops);
      console.log('id 0',result.ops[0]._id);
      console.log('time stamp',result.ops[0]._id.getTimestamp());
      return result
    })
    .catch(err => console.error(`Failed to insert documents: ${err}`));
});
/*
var mongodb=require('mongodb');
var bson=require('bson');

var server=new mongodb.Server('127.0.0.1','27017',{});
var client=new mongodb.Db('mydb',server,{w:1});

client.prependOnceListener(function(error)
{
    if(error)
        throw error;
    console.log("connection of,ready to perform mongose")
    collection.insert(
        {
            "name":"sandeep",
            "tutorial":"mongodb tutorial"
        },
        {safe:true},
        function(error,document)
        {
            if(error)
                throw error;
            console.log(document);
        }
    );

});
*/