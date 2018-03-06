// var configuraExpress = new function(){

//     let app = require('express')();

//     //configuraçao da engine de view
//     app.set('view engine', 'ejs');

//     return app;
// }

let express = require('express');
let load = require('express-load');



module.exports = function(){
    var app = express();

    //configuraçao da engine de view
    app.set('view engine', 'ejs');

    //informando o express da localizacao customizada da pasta views
    app.set('views', './app/views');

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);
    return app;
}