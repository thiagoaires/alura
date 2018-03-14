// var configuraExpress = new function(){

//     let app = require('express')();

//     //configuraçao da engine de view
//     app.set('view engine', 'ejs');

//     return app;
// }

let express = require('express');
let load = require('express-load');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

module.exports = () => {

    var app = express();

    //configuraçao da engine de view
    app.set('view engine', 'ejs');

    //informando o express da localizacao customizada da pasta views
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());


    /* ilustraçao ASCII de como funciona require e request

    req -> ~~middlewareBodyParser ->> middlewareAutenticacao~~   funcao que trata requisicao
    
    */

    load('routes', {
            cwd: 'app'
        })
        .then('infra')
        .into(app);

    return app;
}