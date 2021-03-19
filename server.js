const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const port = 8080 || process.env.PORT;
const app = express();
app.set('view engine','ejs');
app.set('views','./views');

app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

app.use(express.static('./assets'));

app.get('/',(req,res)=>{
    return res.render('index',{
        title:"B3B Tech | Home"
    });
})
app.get('/getintouch',(req,res)=>{
    return res.render('_getintouch',{
        title:"B3B Tech | Get In Touch"
    })
})

app.listen(port,(err)=>{
    if(err)console.error("Error in listen",err);
    console.log("Server listening on port " + port);
})