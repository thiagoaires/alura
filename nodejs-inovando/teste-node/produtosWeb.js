let http = require('http');
let ip = 'localhost';
let porta = 3000;

let paginaHome      = '<html><body><h1>home</h1></body></html>';
let paginaProduto   = '<html><body><h1>Listando Produtos</h1></body></html>';

let server = http.createServer(function(req, res){
    req.url == '/produtos' ? res.end(paginaProduto) : res.end(paginaHome);

});

server.listen(porta, ip);

console.log(`Server rodando no ${ip}:${porta}`);