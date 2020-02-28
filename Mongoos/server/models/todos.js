var mongoose=require('mongoose');
var todos=mongoose.model('todos',{
    text :{
        type:String,
        required:true,
        minlength :3,
        default:'username'
    },
    completed:{
        type:Boolean,
       default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
} );

module.exports={todos};