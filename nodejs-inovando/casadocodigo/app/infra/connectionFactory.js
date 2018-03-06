var mysql = require('mysql');
//Factory Method
let createDBConnection = function(){

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
};

//wrapper
module.exports = function(){
    return createDBConnection;
}