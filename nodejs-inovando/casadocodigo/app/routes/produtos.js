module.exports = function(app){

    app.get('/produtos', function(req, res){
        
        let mysql = require('mysql');
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo_nodejs'
        });


        connection.query('select * from livros',function(err, results){
            //res.send(results);
            res.render('produtos/lista', {lista: results})
            console.log('resultado da query');
        });

        connection.end();
    
    });
};