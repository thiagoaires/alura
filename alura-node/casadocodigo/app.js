var express = require('express');
var app = express();

app.get('/produtos', function(req,res){
    res.send("<html>produtos</html>");
});

app.listen(3000,function(){
    console.log('server ok');
});
