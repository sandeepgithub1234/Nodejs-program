var getUser=(id,callback)=>
{
   var user={
       id:id,
       name:'sandeep'
    };
    console.log('this is starting of the program:');
    callback(user);

}

getUser(31,(user)=>{
   
    console.log(user);
});
