
module.exports = function(app){

    app.get('/produtos', function(req, res){

        let connection      = app.infra.connectionFactory();
        let produtosBanco   = app.infra.produtosBanco;
        
        
        produtosBanco.lista(connection, function(erros, resultados){
            res.render('produtos/lista', {lista: resultados});
            //res.send(resultados);
        });
        

        // connection.query('select * from livros',function(err, resultados){
        //     res.render('produtos/lista', {lista: resultados});
        // });

        connection.end();
    });

    app.get('produtos/detalhe', function(){});
};