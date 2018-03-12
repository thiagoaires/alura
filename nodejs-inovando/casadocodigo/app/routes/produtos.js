module.exports = function (app) {

    let listaProdutos = function (req, res) {
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (erros, resultados) {

            res.render('produtos/lista', {

                lista: resultados
            });
        });

        connection.end();
    };

    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', function (req, res) {

        res.render('produtos/form');

    });

    app.post('/produtos', function (req, res) {

        let produto = req.body;
        console.log(produto);

        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function (erros, resultados) {

            res.redirect('/produtos');
        });


    });

    app.get('produtos/detalhe', function () {

        produtosDAO.carrega(id, callback)
    });

    app.get('produtos/detalhe', function () {

        let connection = app.infra.connectionFactory();
        let produtosDAO = app.infra.produtosDAO;

        let produto = produtosDAO.carrega(id, callback);

        if (produto) {

            produtosDAO.remove(produto, callback);
        };
    });
};