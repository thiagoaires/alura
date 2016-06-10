var trsPaciente = document.getElementsByClassName("paciente");

percorreArray(trsPaciente)

for( posicaoAtual = 0 ; posicaoAtual <= trsPaciente.length - 1; posicaoAtual++){

	var pacienteTr = trsPaciente[posicaoAtual];

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var pacienteAtual = {	
							"nome": tdNome.textContent, 
							"peso": tdPeso.textContent, 
							"altura": tdAltura.textContent,
							"pegaImc": function(){
									if (this.altura != 0){

										var imc = this.peso / (this.altura * this.altura);

										return imc;

									} else {

										console.log('altura é zero')

									}
							}
						};
	console.log(pacienteAtual.nome);
}