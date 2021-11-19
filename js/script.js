let eleccion;
let recetas = [];
const categoria = document.getElementById("categoria");// Agarra el valor del select

categoria.addEventListener("change", function(e) { //Evento que se ejecuta al cambiar el valor del select
	console.log(e.target.value);
	if (e.target.value == "desayuno"){
		const display = document.querySelector(".display");
		display.innerHTML = `
		<div class="card">
			<img class="card-image-top" src="/resources/panconhuevo.jpg" />
			<div class="card-body">
				<h4 class="card-title">Pan con Huevo</h4>
				<p class="card-text">
					<strong>Ingredientes:<br>1.- Pan<br>2.- Huevos...</strong>
				</p>
			</div>
		</div>`;
	}else if (e.target.value == "null"){
		const display = document.querySelector(".display");
		display.innerHTML = "";
	}else if (e.target.value == "almuerzo"){
		const display = document.querySelector(".display");
		display.innerHTML = `
		<div class="card">
			<img class="card-image-top" src="/resources/papitas.jpg" />
			<div class="card-body">
				<h4 class="card-title">Papas Fritas</h4>
				<p class="card-text">
					<strong>Ingredientes:<br>1.-Papas<br>2.- Sal...</strong>
				</p>
			</div>
		</div>`;

	}
	
	
});


//////////////////////////////////////ENTREGAS ANTERIORES HACIA ABAJO/////////////////////////////////////////////


//////////////Se crea el objeto receta//////////////
class Receta{
	Categoria = "";
	Nombre = "";
	Ingredientes = [];
	Pasos = [];

	constructor(cat, nombre, ingredientes, pasos){
		this.Categoria = cat;
		this.Nombre = nombre;
		this.Ingredientes = ingredientes;
		this.Pasos = pasos;
	}
}
//////////////SE INICIA EL PROGRAMA//////////////
/*do{
eleccion = Number(prompt(`¡Bienvenido! 
¿Qué deseas hacer?:
1.- Ingresar receta
2.- Ver recetas
3.- Salir`));
}while(eleccion != 1 && eleccion != 2 && eleccion != 3);*/

//Menu(eleccion);
console.log(categoria);



////////////////////FUNCIONES////////////////////

function Inicio(){
	do{
	eleccion = Number(prompt(`¡Bienvenido! 
	¿Qué deseas hacer?:
	1.- Ingresar receta
	2.- Ver recetas
	3.- Salir`));
	}while(eleccion != 1 && eleccion != 2 && eleccion != 3);
	//Menu(eleccion);
}

function Menu(eleccion){

	switch(eleccion){
		case 1://Ingresar receta
			let aux = Number(prompt(`En que categoria entra tu receta:
1.- Desayuno
2.- Almuerzo
3.- Cena`));
			let cat;
			switch(aux){
				case 1:
					cat = "Desayuno";
					break;
				case 2:
					cat = "Almuerzo";
					break;
				case 3:
					cat = "Cena";
					break;
				default:
					break;
			}
			
			let nombre = prompt("Ingresa el nombre de la receta");
			let ctosingredientes = Number(prompt("Ingresa el número de ingredientes"));
			let ingredientes = [];
			for (let i=0; i<ctosingredientes; i++){
				ingredientes[i] = ` ${i+1}.- `+(prompt("Ingresa el ingrediente N°"+(i+1)));
			}
			let ctospasos = Number(prompt("Ingresa el número de pasos"));
			let pasos = [];
			for (let i=0; i<ctospasos; i++){
				pasos[i] = " Paso " + (i+1) +": "+(prompt("Ingresa el paso N°"+(i+1)));
			}
			let receta = new Receta(cat, nombre, ingredientes, pasos);
			recetas.push(receta);
			Inicio();
			break;
		
		case 2://Ver recetas
			for (let i=0; i<recetas.length; i++){
				console.log(`
				${i+1}. ${recetas[i].Nombre} Categoría: ${recetas[i].Categoria}
				Ingredientes : 
			   ${recetas[i].Ingredientes}
				Pasos:
			   ${recetas[i].Pasos}`);
			}
			Inicio();
			break;
		
		case 3://Salir
			alert("¡Hasta luego!");
			break;
	}
}

/*sessionStorage.setItem("recetas", JSON.stringify(recetas));
let recetas2 = JSON.parse(sessionStorage.getItem("recetas"));
console.log(recetas2);*/


/*  /////////////////IDEAS PARA MAS ADELANTE///////////////

function Menu(eleccion, recetas){
	eleccion = MMenu();
	switch(eleccion){
		case 1:
			aux = AgregarReceta();
			recetas.push(aux);
			Menu(eleccion, recetas);
			break;
		case 2:
			for (let i=0; i<recetas.length; i++){
				if (recetas.length == 0){
					console.log("No hay recetas");
					Menu(eleccion, recetas);
				}else{
				VerRecetas(recetas, i);
				}
			}
			Menu(eleccion, recetas);
			break;
		case 3:
			console.log("¡Hasta luego!");
			exit;
	}
	break;
}


function AgregarReceta(){

	let nombre = prompt("Ingresa el nombre de la receta");
		let ctosingredientes = Number(prompt("Ingresa el número de ingredientes"));
		let ingredientes = [];
		for (let i=0; i<ctosingredientes; i++){
			ingredientes[i] = `${i+1}.- `+(prompt("Ingresa el ingrediente N°"+(i+1)));
		}
		let ctospasos = Number(prompt("Ingresa el número de pasos"));
		let pasos = [];
		for (let i=0; i<ctospasos; i++){
			pasos[i] = "Paso " + (i+1) +": "+(prompt("Ingresa el paso N°"+(i+1)));
		}
	return ({Nombre: nombre, Ingredientes: ingredientes, Pasos: pasos});

}

function VerReceta(receta, j){
	console.log("RECETAS");
	console.log(`${receta[j].Nombre}`);
	console.log(`Ingredientes:`);
	for (let i=0; i<receta[j].Ingredientes.length; i++){
		console.log(receta[j].Ingredientes[i]);
	}
	console.log(`Pasos:`);
	for (let i=0; i<receta[j].Pasos.length; i++){
		console.log(receta[j].Pasos[i]);
	}
	break;

}

function MMenu(){
	let eleccion;
	do{
	eleccion = Number(prompt(`¡Bienvenido! 
¿Qué deseas hacer?:
1.- Ingresar receta
2.- Ver recetas
3.- Salir`));
	}while(eleccion != 1 && eleccion != 2 && eleccion != 3);
	return eleccion;
}
*/

