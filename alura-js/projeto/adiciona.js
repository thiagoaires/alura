

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(e){

	e.preventDefault();

	var campoNome = document.querySelector("#campo-nome").value;
	var campoPeso = document.querySelector("#campo-peso").value;
	var campoAltura = document.querySelector("#campo-altura").value;

	var pacienteNovo = 	"<tr class='paciente'>" +
						"<td class='info-nome'>" + campoNome + "</td>" +
						"<td class='info-peso'>" + campoPeso + "</td>" +
						"<td class='info-altura'>" + campoAltura + "</td>" +
						"<td class='info-imc'></td>" +
					"</tr>" ;
	// var tabela = document.getElementsByTagName("table")[0];
	var tabela = document.querySelector("table");
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;

	document.querySelectorAll("input[text]").value = "";
});