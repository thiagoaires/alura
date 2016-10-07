var express = require('express');
var app = express();

//definindo o embeeded javascript como plataforma de view do servidor
app.set('view engine', 'ejs');

//definindo que: quando acessar a url '/produtos', qual página será mostrada/renderizada
app.get('/produtos', function(req,res){
    //res.send("<html>produtos</html>");
    res.render('produtos/lista');
});

//qdo inicia o servidor via node, ele escutará a porta listada pelo metodo listen
app.listen(3000,function(){
    console.log('server ok');
});
