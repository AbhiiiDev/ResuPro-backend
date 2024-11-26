const express=require('express');


const app=express();

app.get('/',(req,res)=>{
res.send('server is up and working fine');
})


app.listen(8000,()=>{
    console.log('server listening on 8000');
})