var mongoose=require('mongoose');
var user=mongoose.model('user',{
    username:{
        type:String,
        required:true,
        minlength :3,
        default:'username'
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    email:{
        type:String,
        minlength:8,
        default:null
    },
    age:{
        type:Number,
        default:null
    },
    address:{
        type:String,
        default:null
    }
} );
module.exports={user};
