function percorreArray(trsPaciente, comportamento){
	for( posicaoAtual = 0 ; posicaoAtual <= trsPaciente.length - 1; posicaoAtual++){
		comportamento()
	}
};