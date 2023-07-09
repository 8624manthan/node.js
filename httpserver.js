var http=require('http');       //create http server

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});        //use html facility
    
    for(var i=0;i<20;i++)
    {
        res.write('hello '+i+"<br>");
    }
        res.end();


        console.log("print successfully")
}).listen(1000);