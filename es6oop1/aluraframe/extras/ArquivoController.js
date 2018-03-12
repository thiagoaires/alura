class ArquivoController {

    constructor(){
        
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //let dados = this._inputDados.value.split('/').map(item => item.toUpperCase());
        let dados = ArquivoHelper.cria(this._inputDados);
        let arquivo = new Arquivo(...dados)
        console.log(`arquivo: ${arquivo.nome}.${arquivo.tipo}, tamanho: ${arquivo.tamanho}`);
        this._limpaFormulario();
    }

    _limpaFormulario(){

        this._inputDados.value = '';
        this._inputDados.focus();
    }
}