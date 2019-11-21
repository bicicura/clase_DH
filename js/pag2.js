window.addEventListener ('load', function() {
  var listadoURL = 'https://api.themoviedb.org/3/genre/tv/list?api_key=b0f40cf877bd4ccb9f9f1975eb5ffa65&language=es-AR'
  var list = document.querySelector('.listado')

  fetch(listadoURL)
	.then(function (respuesta){
		return respuesta.json();
	})
	.then(function (informacion){
    console.log(informacion)
    var id = informacion.id
  	for (var genero of informacion.genres) {
			list.innerHTML += `<div class="contenedor"><li><a href="pagina3.html?idDeGenero=${genero.id}&nombreDeGenero=${genero.name}">` + genero.name + `</a></li></div>`;
		}
    // console.log(informacion);
	})
	.catch(function (error) {
		console.log("Error: " + error);
	})

})
