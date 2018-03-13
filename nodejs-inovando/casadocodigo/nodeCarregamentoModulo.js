function require(path){
    let CodigoDoSeuModulo = carregado(path);
    let funcaoDeCarregamento = function(){
        eval(CodigoDoSeuModulo);
    }

    let module = {
        exports: {}
    };

    funcaoDeCarregamento(module, module.exports);
};