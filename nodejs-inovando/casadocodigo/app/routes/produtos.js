module.exports = app => {

    let listaProdutos = (req, res, next) => {
        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista((erros, resultados) =>{
            
            if(erros){
                return next(erros);
            };

            res.format({
                html: () => res.render('produtos/lista', {
                    lista: resultados
                }),
                json: () => res.json(resultados)
            })
        });

        connection.end();
    };

    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', (req, res) => res.render('produtos/form',{errosValidacao:{},produto:{}}));

    app.post('/produtos', (req, res) => {

        let produto = req.body;
        
        req.assert('titulo', 'Titulo Obrigatorio').notEmpty();
        req.assert('preco', 'Formato Invalido').isFloat();

        let erros  = req.validationErrors();

        if (erros){
            res.format({
                html: () => res.status(400).render('produtos/form', {errosValidacao:erros,produto:produto})
                ,
                json: () => res.status(400).json(erros)
            })
            
            return;
        }

        let connection = app.infra.connectionFactory();
        let produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, (erros, resultados) => {
            console.log(erros);
            res.redirect('/produtos');
        });


    });

    app.get('produtos/detalhe', () => produtosDAO.carrega(id, callback));

    app.get('produtos/detalhe', () => {

        let connection = app.infra.connectionFactory();
        let produtosDAO = app.infra.produtosDAO;

        let produto = produtosDAO.carrega(id, callback);

        if (produto) {

            produtosDAO.remove(produto, callback);
        };
    });
};