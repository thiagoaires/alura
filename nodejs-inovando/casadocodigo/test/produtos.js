let express = require('../config/express')();
let request = require('supertest')(express);

describe('ProdutosController', () => {

    beforeEach((done) => {
        //node-database-cleaner ~~ PESQUISAR
        let conn = express.infra.connectionFactory();
        conn.query("delete from livros", (ex, result) => {
            if(!ex){
                done();
            };
        });
    });

    it('#listagem JSON', (done) => {

        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200, done);
    });

    it('#cadastro com dados invalidos',(done) =>{
        request.post('/produtos')
            .send({titulo: '', descricao: 'novo livro'})
            .expect(400, done);
    });

    it('#cadastro valido', (done) =>{
        request.post('/produtos')
            .send({titulo:'livro daora', descricao: 'novo new livro', preco: 20.30})
            .expect(302, done);
    });
});

/*produtosController
    lista JSON
    cadastro aceitar JSON

    cadastro aceita url encoded*/