module.exports = (app) => {

    app.get('/', (req, res) => {
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);
    
        produtosDAO.lista((erros, resultados) => {
    
            res.render('home/index', {livros:resultados});
        });

        connection.end();
    });
};