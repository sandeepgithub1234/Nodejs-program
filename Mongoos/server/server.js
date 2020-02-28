var express=require('express');
var bodyParser=require('body-parser');
var {mongoose}=require('./db/mongoose.js');
var {todos}=require('./models/todos.js');
var {user}=require('./models/user.js');
var app=express();
app.use(bodyParser.json());

app.post('/todo',(req,res)=>{
    var todo=new todos({
        text:req.body.text
    })

    newdata.save().then((doc)=>{
        console.log('data has inserted',doc);
    }).catch(function(err){
          if(err)
             console.log('Unable to save',err);
    });
    res.send({
        Message:'Unable to response  your request'
      });
    
  });

app.listen(3000,()=>{
    console.log('stated port 3000');
});
//mongoose.connect('Mongodb://localhost:27017/Data',{ useUnifiedTopology: true } );
// mongoose.connect('Mongodb://localhost:27017/Data').then("what you need to happen after the connection is done").catch(function(err){
//     if(err)
//        console.log('Unable to save',err);
// });


var newdata=new user(
    {
      username:'sushant maji',
      password:'sushant@123',
      age:23,
      email:'majisus123@gmail.com',
      address:'room no 146 kaveri hostel jnu,new delhi'
    }

);

newdata.save().then((doc)=>{
    console.log('data has inserted',doc);
}).catch(function(err){
      if(err)
         console.log('Unable to save',err);
});

/*
var Otherdata=new todos(
    {
       text:'compiler assignment',
       completed:false,
       completedAt:12

    }

);

Otherdata.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
}).catch(function(err){
      if(err)
         console.log('Unable to save',err);
});
*/