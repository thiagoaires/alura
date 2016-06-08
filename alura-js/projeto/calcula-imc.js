// peso / altura ²
var peso = 100;
var altura = 0;

var ehDiferenteDeZero = (altura != 0); 

if (ehDiferenteDeZero){

	var imc = peso / (altura * altura);

	console.log(imc);

} else {
	console.log('é zero')
}