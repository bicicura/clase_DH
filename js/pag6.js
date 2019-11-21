window.addEventListener ('load', function() {

  var listadoURL = 'https://api.themoviedb.org/3/genre/tv/list?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=es-AR'
  var list = document.querySelector('.list-gen')
  var list2 = document.querySelector('.list-gen2')
  var boton = document.querySelector('.pag-avanzada')

  fetch(listadoURL)
	.then(function (respuesta){
		return respuesta.json();
	})
	.then(function (informacion){
    var id = informacion.id
  	for (var genero of informacion.genres) {
      list.innerHTML += `<option value="${genero.id}">${genero.name}</option>`
      list2.innerHTML += `<option value="${genero.id}">${genero.name}</option>`
		}
	})
	.catch(function (error) {
		console.log("Error: " + error);
	})

  var discover = 'https://api.themoviedb.org/3/discover/tv?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false'

  fetch(listadoURL)
	.then(function (respuesta){
		return respuesta.json();
	})
	.then(function (informacion){
    console.log(informacion)

	})
	.catch(function (error) {
		console.log("Error: " + error);
	})


})
