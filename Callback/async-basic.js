console.log('starting async');

setTimeout(()=>{
 console.log('inside the callback 2000ms');
},2000);
setTimeout((err,res)=>{
    if(err) throw err;

    console.log('inside the callback 1000ms',res);
   },1000);
setTimeout(()=>{
    console.log('inside the callback 0ms');
   },0);

console.log('finished part');


