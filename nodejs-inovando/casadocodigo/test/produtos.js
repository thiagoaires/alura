let http = require('http');
let assert = require('assert');

describe('ProdutosController', () => {

    it('#listagem JSON', (done) => {

        let configuracoes = {

            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
                //'Accept': 'text/html'
            }
        };

        http.get(configuracoes, res => {

            assert.equal(res.statusCode, 200);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');

            done();
        });

    });
});

/*produtosController
    lista JSON
    cadastro aceitar JSON

    cadastro aceita url encoded*/