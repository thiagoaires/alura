// var configuraExpress = new function(){

//     let app = require('express')();

//     //configuraçao da engine de view
//     app.set('view engine', 'ejs');

//     return app;
// }

module.exports = function(){
    let app = require('express')();

    //configuraçao da engine de view
    app.set('view engine', 'ejs');

    return app;
}