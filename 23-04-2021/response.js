var http=require("http")
var fs=require("fs")
var server=http.createServer(function(req,res){
   
        res.writeHead(200,{contentType:"text/html"})
        fs.readFile("greet.txt",function(err,data){
            if(err) throw err
            else{
                res.write("<h1>"+data);
                res.end();
            }
        })
    
})
server.listen(8001);
console.log("server started succesfully")