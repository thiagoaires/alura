let express = require('express');
let app = express();
let porta = 3000;

app.listen(porta, function(){
    console.log(`Servidor rodando na porta ${porta}`);
});