class ArquivoHelper {

    static cria(informacao){
        return informacao.value.split('/').map(item => item.toUpperCase());
    }
}