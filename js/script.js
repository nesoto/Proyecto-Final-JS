let eleccion;
let recetas = [];



do{
eleccion = Number(prompt(`¡Bienvenido! 
¿Qué deseas hacer?:
1.- Ingresar receta
2.- Ver recetas
3.- Salir`));
}while(eleccion != 1 && eleccion != 2 && eleccion != 3);

switch(eleccion){
	case 1:
		let nombre = prompt("Ingresa el nombre de la receta");
		let ctosingredientes = Number(prompt("Ingresa el número de ingredientes"));
		let ingredientes = [];
		for (let i=0; i<ctosingredientes; i++){
			ingredientes[i] = "1.- "+(prompt("Ingresa el ingrediente N°"+(i+1)));
		}
		let ctospasos = Number(prompt("Ingresa el número de pasos"));
		let pasos = [];
		for (let i=0; i<ctospasos; i++){
			pasos[i] = "Paso " + (i+1) +": "+(prompt("Ingresa el paso N°"+(i+1)));
		}
		recetas.push({Nombre: nombre, Ingredientes: ingredientes, Pasos: pasos});
		break;
	
	case 2:
		for (let i=0; i<recetas.length; i++){
			console.log(`${i+1}. ${recetas[i].Nombre}`);
		}
		break;
	
	case 3:
		console.log("¡Hasta luego!");
		exit;
}

sessionStorage.setItem("recetas", JSON.stringify(recetas));
let recetas2 = JSON.parse(sessionStorage.getItem("recetas"));
console.log(recetas2);
