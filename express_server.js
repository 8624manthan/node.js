var express=require('express');     //create web appliaction using express:
var app=express();          //app is variable

app.get('/',function(req,res){       //binding the middleware to your application

    res.send('express hello');      //using express facility

        ////or

    // res.writeHead(200,{'content-type':'text/html'});        //use html facility
    // res.write('html hello');
    // res.end();
});

app.listen(1000)



//to compile this file first open cmd and 
//step 1:-npm i express
//step 2:-node express_server.js
//browser :-http://localhost:1000