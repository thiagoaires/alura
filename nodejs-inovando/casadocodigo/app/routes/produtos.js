
module.exports = function(app){

    app.get('/produtos', function(req, res){

        let connection = app.infra.connectionFactory();
        connection.query('select * from livros',function(err, results){
            //res.send(results);
            res.render('produtos/lista', {lista: results})
            console.log('resultado da query');
        });

        connection.end();
    });
};