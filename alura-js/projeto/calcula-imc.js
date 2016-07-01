
var botao = document.getElementById("calcula-imcs");
// botao.onclick = calculaTodosImc;
botao.addEventListener("click", function(){
	var trsPaciente = document.getElementsByClassName("paciente");

	percorreArray(trsPaciente, function(){
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


		var imc = pacienteAtual.pegaImc();
		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0]

		tdImc.textContent = imc;

	});
});
