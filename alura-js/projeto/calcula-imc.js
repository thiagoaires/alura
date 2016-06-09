// peso / altura ²

var tdPeso = document.getElementById('peso-2');
var tdAltura = document.getElementById('altura-2');
// var peso = 100;
// var altura = 0;

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var paciente = {"peso": tdPeso.textContent, "altura": tdAltura.textContent};

var ehDiferenteDeZero = (altura != 0); 

if (ehDiferenteDeZero){
	var tdImc = document.getElementById('imc-2');
	var imc = paciente.peso / (paciente.altura * paciente.altura);

	console.log(imc);
	tdImc.textContent = imc;

} else {
	console.log('é zero')
}