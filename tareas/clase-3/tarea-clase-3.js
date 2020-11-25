// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
/*
function saludarAlNombre(nombre){
	if(nombre === "GUSTAVO"){
		return `Hola, Tocayo! Yo también me llamo ${capitalizarLetra(nombre)}`;
	} else if (nombre === "FABRICIO"){
		return `Hola ${capitalizarLetra(nombre)}, te llamas igual que mi tutor`;
	} else {
		return `Hola ${capitalizarLetra(nombre)}!`;
	}
}
function capitalizarLetra(string){
	let cadenaAConvertir = 	string.toLowerCase();
	let letra1 = cadenaAConvertir.charAt(0).toUpperCase();
	return `${letra1}${cadenaAConvertir.slice(1,)}`;
}

let nombreUsuario = prompt("¿Cuál es tu nombre?").toUpperCase();

console.log(saludarAlNombre(nombreUsuario));
*/
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
/*
function compararEdadConNosotros(edad){
	const MIEDAD = 41;
	if(edad == MIEDAD){
		return 'Tenes la misma edad que yo!!!';
	}else if (edad > MIEDAD){
		return 'Eres mayor que yo, yo tengo '+MIEDAD;
	}else {
		return 'Eres menor que yo, yo tengo '+MIEDAD;
	}
}

let edadUsuario = Number(prompt("¿cuántos años tenés?"));
console.log(compararEdadConNosotros(edadUsuario));
*/
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function preguntarPorDocumento(){
	let preguntarDeNuevo = true;
	let pregunta = "¿Tiene documento?";

	while (preguntarDeNuevo) {
		let dni =(prompt(pregunta)||'').toUpperCase();

		if(dni.trim() === "SI"){
			preguntarDeNuevo = false;
			return true;
		}else if(dni.trim() === "NO"){
			preguntarDeNuevo=false;
			return false;
		}else if(dni.trim().length===0){
			pregunta = "no ingresó ningún dato\n ¿Tiene documento?";	
		}else {
			pregunta = "NO ENTENDÍ LA RESPUESTA,\n\"¿Tiene documento?\""
		}
	}

}

if (preguntarPorDocumento() &&	preguntarMayorDeEdad()){
	console.log("Puede entrar al bar, Bienvenido");
} else {
	console.log("No puede entrar al bar, vuelva cuando pueda acreditar ser mayor");
}

function preguntarMayorDeEdad(){
	let edadUsuario = Number(prompt("¿cuántos años tienes?"));
	return edadUsuario>=18;
}