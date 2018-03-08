module.exports = function(app){

    app.get('/produtos', function(req, res){

        let connection      = app.infra.connectionFactory();
        let produtosBanco   = new app.infra.ProdutosDAO(connection);
        
        
        produtosBanco.lista(function(erros, resultados){
            res.render('produtos/lista', {lista: resultados});
        });
        connection.end();

        
    });








    app.get('produtos/detalhe', function(){

        produtosBanco.carrega(id, callback)
    });

    app.get('produtos/detalhe', function(){
        let connection = app.infra.connectionFactory();
        let produtosBanco = app.infra.produtosBanco;

        let produto = produtosBanco.carrega(id, callback);

        if(produto){
            produtosBanco.remove(produto, callback);
        };
    });
};