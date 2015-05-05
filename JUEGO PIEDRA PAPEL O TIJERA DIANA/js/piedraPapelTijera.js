function aleatorio(minimo, maximo) {//el nombre de la función lo pone cada uno. Se recomienda que sea claro. Se declara función
	var numero = Math.floor( (Math.random()* (maximo - minimo) + minimo));
	return numero;
}


var piedra = 0;
var papel = 1;
var tijera = 2;

var nombre_usuario = prompt("Escribe tu nombre")
var usuario = prompt("Elige la opción: \n 0-piedra \n 1-papel \n 2-tijera");
var computadora = aleatorio(0,2);

if (usuario == piedra){
	if(computadora == piedra);
alert=("empate")
}
if (usuario==piedra) {
	if (computadora==papel);
	alert=("gana")
} else {
	if (computadora==tijera);
	alert=("gana" + nombre_usuario)
}
if (usuario == papel){
	if(computadora == papel);
alert=("empate")
}
if (usuario==papel) {
	if (computadora==tijera);
	alert=("gana")
} else {
	if (computadora==piedra);
	alert=("gana" + nombre_usuario)
}
if (usuario == papel) {
	if(computadora == papel) {
	alert=("empate");
	}
}
if (usuario==tijera) {
	if (computadora==tijera);
	alert=("empate")
} else {
	if (computadora==piedra);
	alert=("gana")
}

	
