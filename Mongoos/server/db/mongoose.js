const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const abc = async () => {
    try {
        // we use DataFile for user collection and Data for todo
        await mongoose.connect('mongodb://localhost:27017/Data',{ useNewUrlParser: true } )
    }
    catch(err) {
        console.log(err.message);
    }
    
}
abc();
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!')
});



module.exports={mongoose};