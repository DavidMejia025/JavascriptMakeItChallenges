 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos

player1 = {
	name: "leo",
	height: "1.5",
	sport: "Basquetball"
}

player2 = {
	name: "David",
	height: 1.4,
	sport: "soccer"
}

// Crea una función que reciba un array de atletas y que añada la propiedad `win` a cada atleta dentro del arreglo. 
//  `win` debe ser una función que imprima en la consola "{name} won the {event}",  `event` es un argumento que
//   recibe esta función.

  function addWin(array){

  	array.forEach(function(athlete){
  		athlete.win= win("Olympics")
  	})
  	return array
  }

  function win(event){
  	console.log(this)
  	console.log(`${this.name} won the ${event}`)
  }

array = [player1, player2]
array2 = addWin(array)

console.log(array2[0])



























// // 0. Objetos
// nombre1 = {
// 	name: "Leo",
// 	height: 2,
// 	sport: "Basquetball"
// }

// nombre2 = {
// 	name: "David",
// 	height: 1.8,
// 	sport: "Futball"
// }

// var james = {
//   name: "James",
//   sport: "Futbol",
//   height: 13
// }

// var falcao = {
//   name: "falcao",
//   sport: "Futbol",
//   height: 13
// }



// // 1. Añadir propiedades a objetos
// function x (atletas, event) {
// 	var function = function atletas
// 	atletas.forEach
// 		atleta.win = function {
// 			console.log(qwer {this.name}+{event})
// 		}
// }

// function win (x) {
// 	console.log(name + " won the " + event)
// _______________________________________________________
// var addWinToAthelete = function(atletas) {
//   atletas.forEach(function(atleta){
//     atleta.win = function(event) {
//       console.log(`${this.name} won the ${event}`)
//     }
//   })
// _________________
// }

// 2. Voltea un String

function voltear (name1, name2, event) {

}

// 3. Remueve numeros impares

// 4. Funcion constructora

// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")

console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
