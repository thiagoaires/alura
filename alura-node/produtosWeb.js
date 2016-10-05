var http = require('http');

var server = http.createServer(function(request,response){

    if(request.url == "/produtos"){
        response.end('<html><body>listando produtos</body></html>')
    }else{
        response.end('<html><body>home da página</body></html>')
    }
});
server.listen(3000);
console.log('servidor rodando');
