class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document);
        
        this._inputData       = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor      = $('#valor');

    }

    adiciona(event){

        event.preventDefault();

        let data = new Date(
            ...this._inputData.value
            .split('-')
            /*
            .map(function(item, indice){
                return item - indice % 2;
            })
            */
            .map((item, indice) => item - indice % 2)

            /* ####### 
            qdo se há uma unica instruçao no arrow function(iten - indice...)
            pode-se omitir o bloco ( colchete, {} ) e colocar inline

            outra coisa, como soh tem uma instruçao, pode-se remover o return e o ;
            ####### */
        );

        console.log(data);

        let negociacao = new Negociacao(
            data, 
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }

}