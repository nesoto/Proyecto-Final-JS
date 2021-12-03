let eleccion;
let recetas = [];
const categoria = document.getElementById("categoria");// Agarra el valor del select

/*<input type="text" id="ingrediente" placeholder="Ingrediente" class="centrar">
<button id="agregar" class="centrar">Agregar</button>
*/
categoria.addEventListener("change", function(e) { //Evento que se ejecuta al cambiar el valor del select
	if (e.target.value == "desayuno"){
		const display = document.querySelector(".display");
		const display2 = document.querySelector(".display2");
		const display3 = document.querySelector(".display3");
		display.innerHTML = `
		<div class="card">
			<img class="card-image-top" height="300 "src="/resources/panconhuevo.jpg" />
			<div class="card-body">
				<h4 class="card-title">Pan con Huevo</h4>
				<p class="card-text">
					<strong>Ingredientes:<br>1.- Pan<br>2.- Huevos...</strong><button class="botonr" id="pchboton" style="text-align="right"">Ver más</button>
				</p>
			</div>
		</div>`;
		const botonr = document.getElementById("pchboton");
		botonr.addEventListener("click", function(e) {
			
		});
		display2.innerHTML = `
		<div class="card">
			<img class="card-image-top" height="300 "src="/resources/panconhuevo.jpg" />
			<div class="card-body">
				<h4 class="card-title">Pan con Huevo</h4>
				<p class="card-text">
					<strong>Ingredientes:<br>1.- Pan<br>2.- Huevos...</strong>
				</p>
			</div>
		</div>`;
		display3.innerHTML = `
		<div class="card">
			<img class="card-image-top" height="300 "src="/resources/panconhuevo.jpg" />
			<div class="card-body">
				<h4 class="card-title">Pan con Huevo</h4>
				<p class="card-text">
					<strong>Ingredientes:<br>1.- Pan<br>2.- Huevos...</strong>
				</p>
			</div>
		</div>`;
	}else if (e.target.value == "null"){
		const display = document.querySelector(".display");
		const display2 = document.querySelector(".display2");
		const display3 = document.querySelector(".display3");
		display.innerHTML = "";
		display2.innerHTML = "";
		display3.innerHTML = "";
	}else if (e.target.value == "almuerzo"){
		const display = document.querySelector(".display");
		const display2 = document.querySelector(".display2");
		const display3 = document.querySelector(".display3");
		display.innerHTML = `
		<div class="card">
			<img class="card-image-top" height="300" src="/resources/papitas.jpg" />
			<div class="card-body">
				<h4 class="card-title">Papas Fritas</h4>
				<p class="card-text">
					<strong>Ingredientes:<br>1.-Papas<br>2.- Sal...</strong>
				</p>
			</div>
		</div>`;
		display2.innerHTML = "";
		display3.innerHTML = "";

	}
	
	
});







//////////////////////////////////////ENTREGAS ANTERIORES HACIA ABAJO/////////////////////////////////////////////


//////////////Se crea el objeto receta//////////////
/*class Receta{
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
}*/


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