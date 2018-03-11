class ArquivoController {

    constructor(){
        
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {

        this._limpaFormulario();
    }

    _limpaFormulario(){
        
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}