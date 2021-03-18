const express = require('express');

const port = 4000;

const app = express();

app.get('/',(req,res)=>{
    return res.send('<h1>hello world</h1>');
})
app.listen(port,()=>{
    console.log("listening on port "+port);
});